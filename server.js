import app from "./src/index.js";
import dotenv from "dotenv"

dotenv.config();

app.listen(process.env.SERVER_PORT , () => {
    console.log(`server is running on port ${process.env.SERVER_PORT}`);
})