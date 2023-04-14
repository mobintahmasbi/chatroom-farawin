import path from "path";
import { fileURLToPath } from "url";
import getuser from "../models/UserSelection.js";
import Jwt from "jsonwebtoken";
import hashingPassword from "../Services/hashPassword.cjs";
 //i am omid best
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
        const hashpassword = hashingPassword(password);
        const userInfo = await getuser(phoneNumber, hashpassword);

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
          return res.cookie("token", token).send({
            message: "correct",
            userInfo,
          });
        } else {
          throw new Error("User not found!!!");
        }
      }
      throw new Error("phone number Length is more than 11");
    }
    throw new Error("phone Nmuber or password format is wrong");
  } catch (err) {
    next(err);
  }
};

export { Login, serveLoginPage };
