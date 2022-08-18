import express from "express";
import { randomUUID } from "node:crypto";
import { withRequestId } from "./log";

export const REQUEST_ID_HEADER = "X-Request-ID";

export const requestIdMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const requestId = randomUUID();

  req.headers[REQUEST_ID_HEADER] = requestId;
  res.set(REQUEST_ID_HEADER, requestId);

  withRequestId(requestId, next);
};
