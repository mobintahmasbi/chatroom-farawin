import { Router } from "express";
import { getContactsC } from "../Controllers/ContactController.js";

const ChatroomFunctionlityRouter = Router()

ChatroomFunctionlityRouter.get("/", getContactsC)

export default ChatroomFunctionlityRouter
