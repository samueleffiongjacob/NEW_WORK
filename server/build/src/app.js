"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("../src/config/config");
const keys_1 = require("../src/config/keys");
const logging_1 = __importDefault(require("../src/utils/logging"));
// import {MessageRouter} from "../src/router/MESSAGE/message.routes"
// import { SubcriberRouter } from "../src/router/SUBCRUIBER/subcriber.routes"
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const { cookieSecret } = (0, keys_1.keys)();
const cookieParser = require("cookie-parser");
const app = (0, express_1.default)();
const Startapp = () => {
    /** Log the request */
    app.use((req, res, next) => {
        /** Log the req */
        logging_1.default.info(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () => {
            /** Log the res */
            logging_1.default.info(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
        });
        next();
    });
    app.use((0, express_session_1.default)({
        secret: cookieSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 24 * 60 * 60 * 10000,
            sameSite: "none",
        }
    }));
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("combined"));
    app.use(cookieParser());
    /**ORIGIN TO ACCEPT */
    const allowedOrigins = ['http://localhost:3000'];
    const options = {
        origin: allowedOrigins
    };
    app.use((0, cors_1.default)(options));
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
    /** Healthcheck */
    app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));
    /** Error handling */
    app.use((req, res, next) => {
        const error = new Error('Not found');
        logging_1.default.error(error);
        res.status(404).json({
            message: error.message
        });
    });
    http_1.default.createServer(app).listen(config_1.config.server.port, () => logging_1.default.info(`Server is running on port ${config_1.config.server.port}`));
};
const servertapp = Startapp;
exports.default = servertapp;
