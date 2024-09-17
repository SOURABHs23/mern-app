import "./env.js";
import express from "express";
import { connectUsingMongoose } from "./config/db";

const app = express();

app.get("/", (req, res) => {
  res.send("app is running");
});

app.listen(5000, () => {
  console.log("server is running on 5000");
  connectUsingMongoose();
});
