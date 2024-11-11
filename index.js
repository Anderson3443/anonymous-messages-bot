const TelegramApi = require('node-telegram-bot-api');

const token = '7767956924:AAG3jXr5yQNluwbcyh7itXv4TJ9ESyHCz20';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg => {
const text = msg.text;
const chatId = msg.chat.id;


if (text === '/start') {
bot.sendMessage(chatId, `Привіт, ${msg.chat.first_name}! Я - бот для надсилання анонімних повідомлень!✨ Дізнайтесь все, що думають про Вас інші!
🔗Посилання на мене: @AnonymousMessageUA_bot.
На даний момент Ви надсилаєте повідомлення якомусь користувачу! Надішліть повідомлення й він одразу ж отримає його!✨`)
}

if (text !== '/start') {
bot.sendMessage(chatId, `Дякую! Повідомлення відправлено користувачу, за посиланням якого Ви перейшли! Ваше повідомлення: ${msg.text}`)
    console.log(`text: ${msg.text}, username: ${msg.chat.username}, first name: ${msg.chat.first_name}`);
}
}

)
