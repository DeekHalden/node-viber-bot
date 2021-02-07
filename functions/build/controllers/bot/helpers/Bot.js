"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const viber_bot_1 = require("viber-bot");
const bot_1 = require("./../bot");
const { Text, Video } = viber_bot_1.Message;
class Bot {
    constructor() {
        this.bot = new viber_bot_1.Bot({
            authToken: process.env.BOT_ACCOUNT_TOKEN,
            name: "Deek bot",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Katze_weiss.png",
        });
    }
    async bindListeners() {
        this.bot.on(viber_bot_1.Events.SUBSCRIBED, (response) => {
            response.send(new Text(`Hi there ${response.userProfile.name}. I am ${this.bot.name}! Feel free to ask me anything.`));
            console.log(response.userProfile);
            bot_1.createSubscription(response);
        });
        this.bot.on(viber_bot_1.Events.MESSAGE_RECEIVED, (message, response) => {
            console.log(response.userProfile);
            response.send(new Text(`Message received.`));
        });
        this.bot.on(viber_bot_1.Events.UNSUBSCRIBED, (response) => {
            bot_1.deleteSubscription(response);
        });
    }
    async initBot() {
        try {
            await this.bot.setWebhook(`${process.env.EXPOSE_URL}/viber/webhook`);
            await this.bindListeners();
            console.log("Bot init");
        }
        catch (error) {
            console.log("Can not set webhook on following server. Is it running?");
            console.error(error);
            process.exit(1);
        }
    }
}
exports.Bot = Bot;
//# sourceMappingURL=Bot.js.map