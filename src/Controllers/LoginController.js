import path from "path";
import { fileURLToPath } from "url";
import getuser from "../Repository/getUser.js";
import Jwt from "jsonwebtoken";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const privateKey = "aroosak ghashange man ghermez pooshide"

const serveLoginPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../Views/Pages/Login.html"));
};

const Login = async (req, res, next) => {
  const { phoneNumber, password } = req.body;
  
  try {
    if (
      typeof phoneNumber === "string" &&
      typeof password === "string" &&
      password !== null &&
      phoneNumber !== null
    ) {
      if (phoneNumber.length === 11) {
        const userInfo = await getuser(phoneNumber, password);
        if (userInfo.status === true) {
          const token = Jwt.sign(
            {
              password,
              phoneNumber,
              userId: userInfo.Userinformation.userId,
              userName: userInfo.Userinformation.userName,
            },
            privateKey
          );
          return res.cookie("token", token).redirect(301,"/")
        } else {
          throw new Error("اطلاعات وارد شده صحیح نمیباشد!!!");
        }
      }
      throw new Error("شماره تلفن وارد شده صحیح نمیباشد");
    }
    throw new Error("phone Nmuber or password format is wrong");
  } catch (err) {
    next(err);
  }
};

export { Login, serveLoginPage };
