import "dotenv/config";
import "reflect-metadata";
import * as express from "express";
import { createConnection } from "typeorm";
import { Bot } from "./controllers/bot/helpers/Bot";
import { botRouter } from "./routes/bot/bot";

const app = express();

if (!process.env.BOT_ACCOUNT_TOKEN) {
  console.log("Could not find bot account token key.");
}

if (!process.env.EXPOSE_URL) {
  console.log("Could not find exposing url");
}
const port = process.env.PORT || 3000;

createConnection().then(async (connection) => {
  const bot = new Bot();
  app.use("/viber/webhook", bot.bot.middleware());
  app.use("/", botRouter);
  app.listen(port, async () => await bot.initBot());
});

export default app;
