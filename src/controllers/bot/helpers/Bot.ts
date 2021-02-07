import { Bot as ViberBot, Events as BotEvents, Message } from "viber-bot";
import { createSubscription, deleteSubscription } from "./../bot";

const { Text, Video } = Message;

export class Bot {
  public bot;

  constructor() {
    this.bot = new ViberBot({
      authToken: process.env.BOT_ACCOUNT_TOKEN,
      name: "Deek bot",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/3/3d/Katze_weiss.png",
    });
  }

  private async bindListeners() {
    this.bot.on(BotEvents.SUBSCRIBED, (response) => {
      response.send(
        new Text(
          `Hi there ${response.userProfile.name}. I am ${this.bot.name}! Feel free to ask me anything.`
        )
      );
      console.log(response.userProfile);
      createSubscription(response);
    });

    this.bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
      console.log(response.userProfile);
      response.send(new Text(`Message received.`));
    });

    this.bot.on(BotEvents.UNSUBSCRIBED, (response) => {
      deleteSubscription(response);
    });
  }

  async initBot() {
    try {
      await this.bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`);
      await this.bindListeners();
      console.log("Bot init");
    } catch (error) {
      console.log("Can not set webhook on following server. Is it running?");
      console.error(error);
      process.exit(1);
    }
  }
}
