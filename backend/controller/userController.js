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

//GET SINGLE USER
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const singleUser = await UserModel.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await UserModel.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, about } = req.body;
  try {
    const updateUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
export default router;
