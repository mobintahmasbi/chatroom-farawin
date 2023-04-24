import path from "path"
import { fileURLToPath } from "url";
import userExist from "../Repository/userExist.js";
import createUser from "../Repository/createUser.js";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const ServeRegisterationPage = async (req, res, next) => {
    res.sendFile(path.join(__dirname, "../Views/Pages/Register.html"));
}

const Register = async (req, res, next) => {
    const { userName, password, phoneNumber} = req.body;
    try{
        if(userName === undefined || password === undefined || phoneNumber === undefined){
            throw Error("لطفا تمام تمام فیلد هارا کامل وارد کنید.")
        }
        const {status} = await userExist(phoneNumber)
        if(status){
            throw Error("این شماره قبلا ثبت شده است")
        }
        const creation = await createUser(userName, password, phoneNumber, "somthing for now")
        if(creation.status){
            return res.status(201).send({
                msg: "ثبت نام شما با موفقیت تکمیل شد.!!",
                redirected: true,
                url: "http://localhost:3000/login"
            })
        } 
        return res.status(500).send({
            msg: "عملیات با شکست مواجه شد لطفا لحظاتی دیگر دوباره تلاش کنید."
        })
    } catch(err){
        // console.log(err.message)
        next(err)
    }
}


export { ServeRegisterationPage, Register }