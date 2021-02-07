"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botRouter = void 0;
const express_1 = require("express");
const bot_1 = require("../../controllers/bot/bot");
const node_fetch_1 = require("node-fetch");
exports.botRouter = express_1.Router();
exports.botRouter.post("/broadcast-message", async (req, res) => {
    const users = (await bot_1.getSubscriptions()).map(({ id }) => id);
    const result = await node_fetch_1.default("https://chatapi.viber.com/pa/broadcast_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Viber-AUth-Token": process.env.BOT_ACCOUNT_TOKEN,
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
                        Text: "Should get back my ID instead of replace_me_with_receiver_id",
                    },
                    {
                        ActionBody: "https://www.google.com",
                        ActionType: "open-url",
                        Text: "Should get back my URL encoded ID instead of replace_me_with_url_encoded_receiver_id",
                    },
                    {
                        ActionBody: "https://www.google.com",
                        ActionType: "open-url",
                        Text: "Should get back my name instead of replace_me_with_user_name",
                    },
                ],
            },
        }),
    });
    return res.json({ success: result });
});
//# sourceMappingURL=bot.js.map