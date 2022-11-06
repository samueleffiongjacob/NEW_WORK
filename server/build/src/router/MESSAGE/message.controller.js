"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAddNewMessage = exports.httpGetAllMessage = void 0;
const message_model_1 = require("../../models/message.model");
async function httpGetAllMessage(req, res) {
    return res.status(200).json(await (0, message_model_1.getAllMessage)());
}
exports.httpGetAllMessage = httpGetAllMessage;
async function httpAddNewMessage(req, res) {
    const message = req.body;
    if (!message.name ||
        !message.email ||
        !message.message) {
        return res.status(400).json({
            error: "Missing required CONTACT PROPERTY Property",
        });
    }
    await (0, message_model_1.sendNewMessage)(message);
    return res.status(201).json(message);
}
exports.httpAddNewMessage = httpAddNewMessage;
