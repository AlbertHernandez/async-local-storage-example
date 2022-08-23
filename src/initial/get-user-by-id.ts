import { USERS } from "./users";
import { log } from "./log";

export const getUserById = async (id: string) => {
  const user = USERS.find((user) => user.id === id);

  if (!user) return;

  log(`User found with email ${user.email}`);

  return user;
};
