/* eslint-disable comma-dangle */
const passport = require('passport');
const TwitterStrategy = require('passport-twitter');
const { TWITTER_TOKENS } = require('./keys');
const User = require('../models/user-model');

passport.serializeUser((user, done) => {
  done(null, user.get('id'));
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch(() => {
      done(new Error('Failed to deserialize an user'));
    });
});

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_TOKENS.TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_TOKENS.TWITTER_CONSUMER_SECRET,
      callbackURL: TWITTER_TOKENS.TWITTER_CALL_BACK,
    },
    async (token, tokenSecret, profile, done) => {
      const currentUser = await User.findOne({
        twitter_id: profile.json.id_str,
      });
      if (!currentUser) {
        const newUser = await new User({
          name: profile.json.name,
          screen_name: profile.json.screen_name,
          twitter_id: profile.json.id_str,
          profile_image_url: profile.json.profile_image_url,
        }).save();
        if (newUser) {
          done(null, newUser);
        }
      }
      done(null, currentUser);
    }
  )
);
