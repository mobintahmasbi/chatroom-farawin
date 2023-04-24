import mongoose from "mongoose";
const connectionToMongo = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/chatroom").then(() => {
    console.log("connected");
  });
};

export default connectionToMongo
