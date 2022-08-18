import express from "express";
import { userWelcomeHttpHandler } from "./user-http-handler";
import { requestIdMiddleware } from "./request-id-middleware";

const usersRouter = express.Router();

usersRouter.post("/:id/welcome", requestIdMiddleware, userWelcomeHttpHandler);

export { usersRouter };
