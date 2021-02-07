import { Bot as ViberBot, Events as BotEvents, Message } from "viber-bot";
import { subscribed } from "../../controllers/bot";

const { Text, Video } = Message;

export const bot = new ViberBot({
  authToken: process.env.BOT_ACCOUNT_TOKEN,
  name: "Deek bot",
  avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Katze_weiss.png",
});

bot.on(BotEvents.SUBSCRIBED, (response) => {
  response.send(
    new Text(
      `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me anything.`
    )
  );
  subscribed(response);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
  console.log(response.userProfile);
  response.send(new Text(`Message received.`));
});

export const initBot = async () => {
  try {
    await bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`);
    console.log("Bot init");
  } catch (error) {
    console.log("Can not set webhook on following server. Is it running?");
    console.error(error);
    process.exit(1);
  }
};
