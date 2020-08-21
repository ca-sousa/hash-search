const passport = require('passport');
const { TWITTER_TOKENS } = require('../../config/keys');

const loginSucess = (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'User has successfully authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  }
};

const loginFailed = (res) => {
  res.status(401).json({
    success: false,
    message: 'User failed to authenticate.',
  });
};

const logout = (req, res) => {
  req.logout();
  res.redirect(TWITTER_TOKENS.TWITTER_CLIENT_HOME_PAGE_URL);
};

const authenticate = passport.authenticate('twitter');

const redirect = passport.authenticate('twitter', {
  successRedirect: TWITTER_TOKENS.TWITTER_CLIENT_HOME_PAGE_URL,
  failureRedirect: '/auth/login/failed',
});

module.exports = {
  loginSucess,
  loginFailed,
  logout,
  authenticate,
  redirect,
};
