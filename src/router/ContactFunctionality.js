import { Router } from "express";
import { changeNameContact, createNewContactC, getContactsC , deleteContactsC } from "../Controllers/ContactController.js";

const ContactFunctionalityRouter = Router()

ContactFunctionalityRouter.get("/", getContactsC)
ContactFunctionalityRouter.post("/", createNewContactC)
ContactFunctionalityRouter.patch("/", changeNameContact)
ContactFunctionalityRouter.delete("/", deleteContactsC)

export default ContactFunctionalityRouter
