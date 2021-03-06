const TWITTER_TOKENS = {
  TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET,
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN,
  TWITTER_TOKEN_SECRET: process.env.TWITTER_TOKEN_SECRET,
  TWITTER_CALL_BACK: process.env.TWITTER_CALL_BACK,
  TWITTER_CLIENT_HOME_PAGE_URL: process.env.CLIENT_HOME_PAGE_URL,
};

const MONGODB = {
  MONGODB_URI: process.env.MONGODB_URI,
};

const SESSION = {
  COOKIE_KEY: process.env.COOKIE_KEY,
};

module.exports = {
  TWITTER_TOKENS,
  MONGODB,
  SESSION,
};
