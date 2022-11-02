// IMPORTING SYSTEM DEPENDENCIES AND THIRD PARTY MIDDLEWARES
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import { keys } from '../src/config/keys';
import {MessageRouter} from "../src/router/MESSAGE/message.routes"
import { SubcriberRouter } from "../src/router/SUBCRUIBER/subcriber.routes"
import express from "express";

import  session  from 'express-session';
import morgan from "morgan";
import cors from 'cors';


const  cookieParser = require("cookie-parser"); 


const app = express();
const {cookieSecret} = keys();

app.use(
  session({
    secret: cookieSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 30* 24 * 60 * 60 * 10000,
      sameSite: "none",
    }
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// cross origin recieve
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));


app.use(cookieParser());

// CONVERTING NORMAL TEXT/HTML TO JSON USING EXPRESS
app.use(express.json());

// PRODUCTION FETCH FOR CLIENT DISPLAY
app.use(express.static(path.join(__dirname, "..", "public")));

// SETING ROUTERS FOR EXPRESS TO USE IN RESPONSE
app.use("/subcriber", SubcriberRouter);
app.use("/message", MessageRouter);

// GIVING CLIENT POWER TO ROUTES ITSELF WHEN SERVER DOES NOT NOT HAVE ROUTES
app.get("/*", (_req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
