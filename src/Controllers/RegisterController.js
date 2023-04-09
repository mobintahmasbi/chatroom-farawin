import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const ServeRegisterationPage = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "../Views/Pages/Register.html"));
}




export { ServeRegisterationPage }