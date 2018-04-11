const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const Twitter = require('twitter');

const app = express();

const twitterClient = new Twitter({
  consumer_key: 'eG1o2qdBt5aZjtSUPm9RRO3yh',
  consumer_secret: 'GcBzWgWCljyCBxa8jcri4sYmH5OwQYlKBSDOUW6BDfw7vlj2kE',
  access_token_key: '888493544247349249-UGH4hkLPDVSTEXo6P8Ju5vvwgscAftq',
  access_token_secret: 'vjeg4pP0mpg5ZStS2sFesftyhGfGdAqFW1RSRSjEvGzOl'
});

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

app.get('/search/:username', (req, res) => {
  twitterClient.get('statuses/user_timeline', { screen_name: req.params.username, count: 25 }, (error, tweets, response) => {
    if (error) console.error(error);
    res.json(tweets);
  })
})

app.listen(app.get('port'), () => {
  console.log('Server started at port: ', app.get('port'));
})
