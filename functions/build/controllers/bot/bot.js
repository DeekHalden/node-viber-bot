"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscriptions = exports.deleteSubscription = exports.createSubscription = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../models/user/entities/user.entity");
exports.createSubscription = async ({ userProfile: { name, id } }) => {
    const userRepository = typeorm_1.getRepository(user_entity_1.User);
    const user = await userRepository.create({ name, id });
    return await userRepository.save(user);
};
exports.deleteSubscription = async (id) => {
    const userRepository = typeorm_1.getRepository(user_entity_1.User);
    const user = await userRepository.findOne({ where: { id } });
    if (!user) {
        throw new Error("Implement me");
    }
    return await userRepository.delete(user);
};
exports.getSubscriptions = async (config) => {
    const userRepository = typeorm_1.getRepository(user_entity_1.User);
    return await userRepository.find(config);
};
//# sourceMappingURL=bot.js.map