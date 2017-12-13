var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1551485268",
  channelSecret: "3a2d8c70b3db9f9655e0e1b49aa89236",
  channelAccessToken: "wmBUSQvR30c7jpYetblFnyKrBse1vzsSGBMvmCpLoGRInDqAUBYXOwyyPheKCI33uHGeOUwziC7fSAfBrCh41YoWmSld+8svtWP8ZEjgHOIW3DWnBZRkFOcvNyzBESjTGP5AroQfp1cvpMa1LgndwAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
