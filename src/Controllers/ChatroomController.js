import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const serveChatroomPage = async (req, res, next) => {
    const { token } = req.cookies
    if(token !== undefined){
        return res.sendFile(path.join(__dirname, "../Views/Pages/chatroom.html"))
    }
    res.status(403).send("لطفا قبل از ورود به صفحه چت لاگین کنید.")
    
}


export { serveChatroomPage }