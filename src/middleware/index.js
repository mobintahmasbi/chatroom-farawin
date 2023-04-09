import express from 'express'
import bodyParser from "body-parser";
import path from 'path'
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const initMiddleWares = (app) => {
    console.log(path.join(__dirname, "../Views"));
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(express.static(path.join(__dirname, "../Views")))
    app.use(cookieParser())
}

export default initMiddleWares;
