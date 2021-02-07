import "dotenv/config";
import * as express from "express";
import { createConnection } from "typeorm";
import { bot, initBot } from "./routes";
const app = express();

if (!process.env.BOT_ACCOUNT_TOKEN) {
  console.log("Could not find bot account token key.");
}

if (!process.env.EXPOSE_URL) {
  console.log("Could not find exposing url");
}
const port = process.env.PORT || 3000;

createConnection().then((connection) => {
  app.use("/viber/webhook", bot.middleware());
  app.listen(port, initBot);
});

module.exports = app;
