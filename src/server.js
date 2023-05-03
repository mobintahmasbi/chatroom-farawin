import * as dotenv from "dotenv"
dotenv.config();
import app from "./index.js";
import connectionToMongo from "./boot/mogon.js";

connectionToMongo();


app.listen("3000" , () => {
    console.log(`server is running on port ${process.env.SERVER_PORT}`);
})