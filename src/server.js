import * as dotenv from "dotenv"
dotenv.config();
import app from "./index.js";
import connectionToMongo from "./boot/mogon.js";

connectionToMongo();
const port = process.env.SERVER_PORT || 3000

app.listen(process.env.SERVER_PORT , () => {
    console.log(`server is running on port ${process.env.SERVER_PORT}`);
})