"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const express = require("express");
const typeorm_1 = require("typeorm");
const Bot_1 = require("./controllers/bot/helpers/Bot");
const bot_1 = require("./routes/bot/bot");
const app = express();
if (!process.env.BOT_ACCOUNT_TOKEN) {
    console.log("Could not find bot account token key.");
}
if (!process.env.EXPOSE_URL) {
    console.log("Could not find exposing url");
}
const port = process.env.PORT || 3000;
typeorm_1.createConnection().then(async (connection) => {
    const bot = new Bot_1.Bot();
    app.use("/viber/webhook", bot.bot.middleware());
    app.use("/", bot_1.botRouter);
    app.listen(port, async () => await bot.initBot());
});
exports.default = app;
//# sourceMappingURL=index.js.map