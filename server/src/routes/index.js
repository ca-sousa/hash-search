const router = require('express').Router();
const { authModules, searchTweet } = require('../modules');

router.get('/login/success', authModules.loginSucess);

router.get('/login/failed', authModules.loginFailed);

router.get('/logout', authModules.logout);

router.get('/twitter', authModules.authenticate);

router.get('/twitter/redirect', authModules.redirect);

router.get('/search', searchTweet.searchTweets);

router.get('/search-map', searchTweet.searchGeoTweets);

module.exports = router;
