import { getUserById } from "./get-user-by-id";
import { sendEmail } from "./send-email";
import { log } from "./log";

export const sendWelcomeEmail = async (userId: string, requestId: string) => {
  const user = await getUserById(userId, requestId);

  if (!user) {
    throw new Error("User not found");
  }

  await sendEmail(user.email, "Welcome to the platform!", requestId);
  log("Welcome email send to the user", requestId);
};
