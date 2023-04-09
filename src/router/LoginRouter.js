import { Router } from "express";
import { serveLoginPage, Login } from "../Controllers/LoginController.js";

const loginrouter = Router()

loginrouter.get("/",serveLoginPage)
loginrouter.post("/", Login)

export default loginrouter
