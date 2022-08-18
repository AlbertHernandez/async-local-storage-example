import express from "express";
import { sendWelcomeEmail } from "./send-welcome-email";
import { REQUEST_ID_HEADER } from "./request-id-middleware";

export const userWelcomeHttpHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const requestId = req.headers[REQUEST_ID_HEADER] as string;
  await sendWelcomeEmail(req.params.id, requestId);
  res.status(200).send();
};
