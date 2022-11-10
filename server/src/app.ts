// IMPORTING SYSTEM DEPENDENCIES , THIRD PARTY MIDDLEWARES AND ROUTEs
import path from "path";
import http from 'http';
import dotenv from "dotenv";
dotenv.config();
import { config } from '../src/config/config';
import { keys } from '../src/config/keys';
import Logging from '../src/utils/logging'

import {MessageRouter} from "../src/router/MESSAGE/message.routes"
import { SubcriberRouter } from "../src/router/SUBCRUIBER/subcriber.routes"
import express from "express";

import  session  from 'express-session';
import morgan from "morgan";
import cors from 'cors';

const  cookieParser = require("cookie-parser"); 


const app = express();
const {cookieSecret} = keys();

const Startapp = () => {
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        Logging.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

        res.on('finish', () => {
            /** Log the res */
            Logging.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });

        next();
    });
        // setting cokkies for live production
    app.use(
      session({
         secret: cookieSecret,
         resave: false,
         saveUninitialized: false,
         cookie: {
           maxAge: 60* 24 * 60 * 60 * 10000,
           sameSite: "none",
         }
      })
    )
        // json converter, loggers, url and cokkies
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(morgan("combined"));
    app.use(cookieParser());

    
    /**ORIGIN TO ACCEPT */
    const allowedOrigins = ['http://localhost:3000'];
    const options: cors.CorsOptions = {
      origin: allowedOrigins
    }
    app.use(cors(options));


    /** Rules of our API */
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', ['http://localhost:3000']);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

        if (req.method == 'OPTIONS') {
            res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).json({});
        }

        next();
    });

    /** Routes */
    app.use("/subcriber", SubcriberRouter);
    app.use("/message", MessageRouter);

    /** Healthcheck */
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');

        Logging.error(error);

        res.status(404).json({
            message: error.message
        });
    });

     http.createServer(app).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}`));
};



const servertapp = Startapp

export default  servertapp
