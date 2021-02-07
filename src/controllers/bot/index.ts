import { getRepository } from "typeorm";
import { User } from "../../models/user/entities/user.entity";

export const subscribed = ({ profile: { name, id } }) =>
  getRepository(User).create({ name, id });
