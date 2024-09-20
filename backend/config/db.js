import mongoose from "mongoose";

const url =
  process.env.DB_URL ||
  "mongodb+srv://test:root@cluster0.tiupt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb using mongoose is connected ");
  } catch (err) {
    console.log(err);
  }
};
