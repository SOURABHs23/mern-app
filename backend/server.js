import "./env.js";
import express from "express";
import { connectUsingMongoose } from "./config/db.js";
import router from "./controller/userController.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
  console.log("server is running on 5000");
  connectUsingMongoose();
});
