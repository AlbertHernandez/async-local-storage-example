export const log = (message: string, requestId?: string) => {
  let logMessage = message;

  if (requestId) {
    logMessage = `[${requestId}] - ${logMessage}`;
  }

  console.log(logMessage);
};
