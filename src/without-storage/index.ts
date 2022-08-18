import express from "express";
import { usersRouter } from "./users-router";

const PORT = 3000;

function boostrap() {
  const app = express();

  app.use("/users", usersRouter);

  app.listen(PORT, () => {
    console.log(`Starting app without async local storage on port ${PORT}`);
  });
}

boostrap();
