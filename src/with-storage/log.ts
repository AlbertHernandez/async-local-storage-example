import { AsyncLocalStorage } from "async_hooks";

export const logStorage = new AsyncLocalStorage<{ requestId: string }>();

export const withRequestId = (
  requestId: string,
  callback: () => void | Promise<void>
) => {
  const store = {
    requestId,
  };

  logStorage.run(store, callback);
};

export const log = (message: string) => {
  let logMessage = message;

  const { requestId } = logStorage.getStore() || {};

  if (requestId) {
    logMessage = `[${requestId}] - ${logMessage}`;
  }

  console.log(logMessage);
};
