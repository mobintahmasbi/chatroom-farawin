import { Router } from "express";
import { serveChatroomPage } from "../Controllers/ChatroomController.js";

const ChatroomRouter = Router();
ChatroomRouter.get("/",serveChatroomPage)

export default ChatroomRouter