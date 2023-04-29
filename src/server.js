import * as dotenv from "dotenv"
dotenv.config();
import app from "./index.js";
import connectionToMongo from "./boot/mogon.js";

connectionToMongo();
const port = process.env.SERVER_PORT || 3000

app.listen(port , () => {
    console.log(`server is running on port ${port}`);
})