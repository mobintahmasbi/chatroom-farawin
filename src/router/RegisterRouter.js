import { Router } from "express";
import { ServeRegisterationPage } from "../Controllers/RegisterController.js";

const RegisterRouter = Router()

RegisterRouter.get("/", ServeRegisterationPage)


export default RegisterRouter
