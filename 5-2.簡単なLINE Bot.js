var TOKEN = "Botのアクセストークンを入力してください";
var URL = "https://api.line.me/v2/bot/message/reply";

function doPost(event) {
  var request = JSON.parse(event.postData.contents);
  var replyToken = request.events[0].replyToken;
  var userMessage = request.events[0].message.text;

  var botMessage = "";
  if (userMessage.indexOf("そして輝く") !== -1) {
    botMessage = "ウルトラソウル！";
  } else {
    botMessage = userMessage + "よね〜"
  }

  var payload = JSON.stringify({
    "replyToken": replyToken,
    "messages": [{
      "type": "text",
      "text": botMessage
    }]
  });
  UrlFetchApp.fetch(URL, {
    "headers": {
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization": "Bearer " + TOKEN
    },
    "method": "post",
    "payload": payload
  });
  return;
}