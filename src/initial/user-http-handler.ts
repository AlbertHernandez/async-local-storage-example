import express from "express";
import { sendWelcomeEmail } from "./send-welcome-email";

export const userWelcomeHttpHandler = async (
  req: express.Request,
  res: express.Response
) => {
  await sendWelcomeEmail(req.params.id);
  res.status(200).send();
};
