const passport = require("passport");
const TwitterStrategy = require("passport-twitter");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.get('id'));
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: keys.TWITTER_CONSUMER_KEY,
      consumerSecret: keys.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/search"
    },
    async (token, tokenSecret, profile, done) => {
      const currentUser = await User.findOne({
        twitter_id: profile._json.id_str
      });
      if (!currentUser) {
        const newUser = await new User({
          name: profile._json.name,
          screen_name: profile._json.screen_name,
          twitter_id: profile._json.id_str,
          profile_image_url: profile._json.profile_image_url
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);
