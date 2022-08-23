import { log } from "./log";

export const sendEmail = async (email: string, message: string) => {
  log(`Simulating send email to ${email}: ${message}`);
};
