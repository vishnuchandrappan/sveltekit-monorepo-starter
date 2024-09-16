import { APP_NAME } from "@my-app/common/constants.js";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  res.send({ message: `Hello, World! from ${APP_NAME}` });
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
