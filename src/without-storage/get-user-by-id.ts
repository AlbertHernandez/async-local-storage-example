import { USERS } from "./users";
import { log } from "./log";

export const getUserById = async (id: string, requestId: string) => {
  log(`Getting user by id ${id}`, requestId);
  const user = USERS.find((user) => user.id === id);

  if (!user) return;

  log(`User found with email ${user.email}`, requestId);

  return user;
};
