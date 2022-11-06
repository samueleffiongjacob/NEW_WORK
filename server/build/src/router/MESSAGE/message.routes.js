"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRouter = void 0;
const express_1 = __importDefault(require("express"));
const message_controller_1 = require("./message.controller");
exports.MessageRouter = express_1.default.Router();
//setting for knowing the endpoints/ip requsting
exports.MessageRouter.use((req, res, next) => {
    console.log("ip address :", req.ip);
    next();
});
// endpoint to follow
exports.MessageRouter.get("/", message_controller_1.httpGetAllMessage);
exports.MessageRouter.post("/", message_controller_1.httpAddNewMessage);
