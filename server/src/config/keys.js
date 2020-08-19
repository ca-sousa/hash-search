const TWITTER_TOKENS = {
    TWITTER_CONSUMER_KEY: "8KVYlByg3tUtxjs87egppKiFz",
    TWITTER_CONSUMER_SECRET: "FG0f4rDiRH8ltXn35JxRYZ8mzKCMM8RmkkLWgTJrjROKa2nv6S",
    TWITTER_ACCESS_TOKEN: "2974992623-kfHtFyesZhbpGK6LD8eKSrDNPMIBMoErPFSlfW9",
    TWITTER_TOKEN_SECRET: "awE4nzpYtbCFD746M5HpXYvOJmergDzWeayDV7TTtOTQ4"
  };
  
  const MONGODB = {
    MONGODB_URI: `mongodb://localhost:27017/hasearch`
  };
  
  const SESSION = {
    COOKIE_KEY: "thisappisawesome"
  };
  
  const KEYS = {
    ...TWITTER_TOKENS,
    ...MONGODB,
    ...SESSION
  };
  
  module.exports = KEYS;