import { Router } from "express";
import { createNewContactC, getContactsC } from "../Controllers/ContactController.js";

const ChatroomFunctionlityRouter = Router()

ChatroomFunctionlityRouter.get("/", getContactsC)
ChatroomFunctionlityRouter.post("/", createNewContactC)

export default ChatroomFunctionlityRouter
