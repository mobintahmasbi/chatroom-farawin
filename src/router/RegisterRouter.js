import { Router } from "express";
import { Register, ServeRegisterationPage } from "../Controllers/RegisterController.js";

const RegisterRouter = Router()

RegisterRouter.get("/", ServeRegisterationPage)
RegisterRouter.post("/", Register)

export default RegisterRouter
