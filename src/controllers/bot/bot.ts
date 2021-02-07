import { getRepository } from "typeorm";
import { User } from "../../models/user/entities/user.entity";

export const createSubscription = async ({ userProfile: { name, id } }) => {
  const userRepository = getRepository(User);
  const user = await userRepository.create({ name, id });
  return await userRepository.save(user);
};

export const deleteSubscription = async (id: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { id } });
  if (!user) {
    throw new Error("Implement me");
  }
  return await userRepository.delete(user);
};

export const getSubscriptions = async (config?) => {
  const userRepository = getRepository(User);
  return await userRepository.find(config);
};
