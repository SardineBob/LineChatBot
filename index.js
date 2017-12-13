var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1551485268",
  channelSecret: "3a2d8c70b3db9f9655e0e1b49aa89236",
  channelAccessToken: "wmBUSQvR30c7jpYetblFnyKrBse1vzsSGBMvmCpLoGRInDqAUBYXOwyyPheKCI33uHGeOUwziC7fSAfBrCh41YoWmSld+8svtWP8ZEjgHOIW3DWnBZRkFOcvNyzBESjTGP5AroQfp1cvpMa1LgndwAdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event.message.type);
  if (event.message.type = 'text') {
    var msg = event.message.text;
    event.reply("你好我姓王，我是機器人小威，我收到你說的:" + msg + "；然後我現在是鸚鵡模式，所以我重複你講的話，怎樣?咬我啊。").then(function(data) {
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

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
