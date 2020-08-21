const Twit = require('twit');
const { TWITTER_TOKENS } = require('../../config/keys');

const twitter = new Twit({
  consumer_key: TWITTER_TOKENS.TWITTER_CONSUMER_KEY,
  consumer_secret: TWITTER_TOKENS.TWITTER_CONSUMER_SECRET,
  access_token: TWITTER_TOKENS.TWITTER_ACCESS_TOKEN,
  access_token_secret: TWITTER_TOKENS.TWITTER_TOKEN_SECRET,
});

const searchTweets = async (req, res) => {
  const params = {
    q: `#${req.query.q}`,
    count: '30',
    lang: 'pt',
  };
  const twitterResponse = await twitter.get('search/tweets', params);
  const response = twitterResponse.data.statuses.map((element) => ({
    created_at: element.created_at,
    text: element.text,
    id: element.id_str,
    user: element.user.name,
  }));
  return res.json(response);
};

const searchGeoTweets = async (req, res) => {
  const params = {
    q: `#${req.query.q}`,
    count: '50',
    lang: 'pt',
  };
  const twitterResponse = await twitter.get('search/tweets', params);
  const response = twitterResponse.data.statuses.map((element) => ({
    coordinates: element.geo ? element.geo.coordinates : null,
  }));
  return res.json(response);
};

module.exports = {
  searchTweets,
  searchGeoTweets,
};
