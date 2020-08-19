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
  q: '#cachorro',
  count: '25',
  result_type: 'popular',
  lang: 'pt'
}

router.get('/search', (req, res) => {
    t.get('search/tweets', params
    ).catch(function(err){
      console.log('Caught error', err.stack)
    }).then(function (result) {
      console.log('data', result.data)
    })
});

module.exports = router ;