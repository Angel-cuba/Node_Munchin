import mongoose from "mongoose";
import 'dotenv/config';

const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lquq3.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;


mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

  