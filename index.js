//Нужно прописать npm init -y
//Также npm i node-telegrambot-api

const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(" ТУТ ", {polling: true}); // ТУТ - вставляем сюда api,которое нам дал botfather

const fix_html = (text) => {
  return text.replace ('<', '%lt;').replace('>', '%gt;');
};

bot.onText(/\/echo (.+)/, (msg, match) => {
  bot.sendMessege(msg.chat.id, match[1]);
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessege(msg.chat.id, "PONG!");
});

bot.onText(/\/get_id/, (msg) => {
  if (msg.reply_to_messege)
    bot.sendMessege(msg.chat.id, `ID of ${fix_html(msg.reply_to_messge.from.first_name)}: 
      <code>${msg.reply_to_messege.from.id}</code>. `, {parse_mode: "HTML"});     
  else
    bot.sendMessege(msg.chat.id, `Your ID: <code>$ {msg.from.id}</code>`, {parse_mode: "HTML"});
});

bot.onText(/\/json/, (msg) => {
  bot.sendMessege(msg.chat.id, `<code>$ {fix_html(JSON.stringify(msg))}</code>`, {parse_mode: "HTML"});
});
