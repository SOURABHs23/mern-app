import "./env.js";
import express from "express";
import { connectUsingMongoose } from "./config/db.js";
import router from "./controller/userController.js";

const app = express();
app.use(express.json());

app.use(router);

app.listen(5000, () => {
  console.log("server is running on 5000");
  connectUsingMongoose();
});
