import loginrouter from "./LoginRouter.js";
import RegisterRouter from "./RegisterRouter.js";

export default function (app){
    app.use("/Register", RegisterRouter)
    app.use('/Login', loginrouter)
}
