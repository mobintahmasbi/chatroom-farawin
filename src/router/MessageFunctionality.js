import { Router } from "express"
import { pushMessage } from "../Controllers/messageController.js"

const MessageFunctionalityRouter = Router()

MessageFunctionalityRouter.post("/", pushMessage)

export default MessageFunctionalityRouter