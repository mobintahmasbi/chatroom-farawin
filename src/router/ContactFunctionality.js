import { Router } from "express";
import { changeNameContact, createNewContactC, getContactsC } from "../Controllers/ContactController.js";

const ContactFunctionalityRouter = Router()

ContactFunctionalityRouter.get("/", getContactsC)
ContactFunctionalityRouter.post("/", createNewContactC)
ContactFunctionalityRouter.patch("/", changeNameContact)

export default ContactFunctionalityRouter
