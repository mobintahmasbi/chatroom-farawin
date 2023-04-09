import express from "express"
import NotFoundHandler from "./middleware/404.js";
import ErrorHandler from "./middleware/Exception.js";
import initMiddleWares from "./middleware/index.js";
import initrouter from "./router/index.js"

const app = express();
initMiddleWares(app);
initrouter(app);
app.use(NotFoundHandler)
app.use(ErrorHandler)

export default app;
