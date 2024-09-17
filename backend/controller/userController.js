import express from "express";
import UserModel from "../model/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, about } = req.body;
  try {
    const userAdded = await UserModel.create({
      name: name,
      email: email,
      about: about,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

//GET
router.get("/", async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
