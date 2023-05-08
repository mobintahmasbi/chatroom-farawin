import loginrouter from "./LoginRouter.js";
import RegisterRouter from "./RegisterRouter.js";
import ChatroomRouter from "./ChatroomRouter.js";
import ContactFunctionlityRouter from "./ContactFunctionality.js";
import MessageFunctionalityRouter from "./MessageFunctionality.js";

export default function (app){
    app.use("/api/v1/chatroom/contacts", ContactFunctionlityRouter)
    app.use("/api/v1/chatroom/messages", MessageFunctionalityRouter)
    app.use("/Register", RegisterRouter)
    app.use('/Login', loginrouter)
    app.use("/", ChatroomRouter)
}
