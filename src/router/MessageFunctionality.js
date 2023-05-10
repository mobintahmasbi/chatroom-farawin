import { Router } from "express"
import { pullMessage, pushMessage } from "../Controllers/messageController.js"

const MessageFunctionalityRouter = Router()

MessageFunctionalityRouter.post("/", pushMessage)
MessageFunctionalityRouter.post("/pull", pullMessage)

export default MessageFunctionalityRouter