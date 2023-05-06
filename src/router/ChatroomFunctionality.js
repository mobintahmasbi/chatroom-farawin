import { Router } from "express";
import { changeNameContact, createNewContactC, getContactsC } from "../Controllers/ContactController.js";

const ChatroomFunctionlityRouter = Router()

ChatroomFunctionlityRouter.get("/", getContactsC)
ChatroomFunctionlityRouter.post("/", createNewContactC)
ChatroomFunctionlityRouter.patch("/", changeNameContact)

export default ChatroomFunctionlityRouter
