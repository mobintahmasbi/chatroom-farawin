import loginrouter from "./LoginRouter.js";
import RegisterRouter from "./RegisterRouter.js";
import ChatroomRouter from "./ChatroomRouter.js";
import ChatroomFunctionlityRouter from "./ChatroomFunctionality.js";

export default function (app){
    app.use("/api/v1/chatroom/contacts", ChatroomFunctionlityRouter)
    app.use("/Register", RegisterRouter)
    app.use('/Login', loginrouter)
    app.use("/", ChatroomRouter)
}
