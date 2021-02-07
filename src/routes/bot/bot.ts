import { Router } from "express";
import { getSubscriptions } from "../../controllers/bot/bot";
import { User } from "../../models/user/entities/user.entity";
import fetch from "node-fetch";

export const botRouter = Router();

botRouter.post("/broadcast-message", async (req, res) => {
  const users = (await getSubscriptions()).map(({ id }: User) => id);
  const result = await fetch("https://chatapi.viber.com/pa/broadcast_message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Viber-AUth-Token": process.env.BOT_ACCOUNT_TOKEN,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      url: process.env.EXPOSE_URL,
      sender: {
        name: "D",
        avatar: "http://avatar.example.com",
      },
      min_api_version: 2,
      type: "rich_media",
      broadcast_list: users,
      rich_media: {
        Type: "rich_media",
        BgColor: "#FF3333",
        Buttons: [
          {
            ActionBody: "https://www.google.com",
            ActionType: "open-url",
            Text:
              "Should get back my ID instead of replace_me_with_receiver_id",
          },
          {
            ActionBody: "https://www.google.com",
            ActionType: "open-url",
            Text:
              "Should get back my URL encoded ID instead of replace_me_with_url_encoded_receiver_id",
          },
          {
            ActionBody: "https://www.google.com",
            ActionType: "open-url",
            Text:
              "Should get back my name instead of replace_me_with_user_name",
          },
        ],
      },
    }),
  });
  return res.json({ success: result });
});
