var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1551485268",
  channelSecret: "3a2d8c70b3db9f9655e0e1b49aa89236",
  channelAccessToken: "wmBUSQvR30c7jpYetblFnyKrBse1vzsSGBMvmCpLoGRInDqAUBYXOwyyPheKCI33uHGeOUwziC7fSAfBrCh41YoWmSld+8svtWP8ZEjgHOIW3DWnBZRkFOcvNyzBESjTGP5AroQfp1cvpMa1LgndwAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply(msg).then(function(data) {
      // success 
      console.log(msg);
    }).catch(function(error) {
      // error 
      console.log('error');
    });
  }
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//�]�� express �w�]�� port 3000�A�� heroku �W�w�]�o���O�A�n�z�L�U�C�{���ഫ
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
