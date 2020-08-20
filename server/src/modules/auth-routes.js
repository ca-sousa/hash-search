const router = require("express").Router();
const twit = require('twit');
const passport = require("passport");
const CLIENT_HOME_PAGE_URL = "http://localhost:3000";
const keys = require("../config/keys");

//Twitter Authentication
router.get("/login/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "User failed to authenticate."
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_HOME_PAGE_URL);
});

router.get("/twitter", passport.authenticate("twitter"));

router.get(  "/twitter/redirect",  passport.authenticate("twitter", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);

//Search
var t = new twit({
  consumer_key: keys.TWITTER_CONSUMER_KEY, 
  consumer_secret:keys.TWITTER_CONSUMER_SECRET,
  access_token: keys.TWITTER_ACCESS_TOKEN, 
  access_token_secret: keys.TWITTER_TOKEN_SECRET, 
});

var params = {
  q: '#cachorro', //query_string express
  count: '2',
  lang: 'pt'
}

router.get('/search', async (req, res) => {
  const twitterResponse = await t.get('search/tweets', params)
  const response = twitterResponse.data.statuses.map((element, index) => {
    return {
      created_at: element.created_at,
      text: element.text,
      id: element.id_str,
      user: element.user.name,
    }
  })
  return res.json(response)
});

router.get('/search-map', async (req, res) => {
  const twitterResponse = await t.get('search/tweets', params)
  const response = twitterResponse.data.statuses.map((element, index) => {
    return {
      coordinates: element.geo ? element.geo.coordinates : null,
    }
  })
  return res.json(response)
});

router.post('/add-colection', async (req, res) => {
  console.log(req.body)
  return res.json(response)
});


module.exports = router ;
