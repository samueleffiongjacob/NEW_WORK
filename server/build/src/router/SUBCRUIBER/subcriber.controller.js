"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAddNewEmails = exports.httpGetAllEmails = void 0;
const emailsubcriber_model_1 = require("../../models/emailsubcriber.model");
async function httpGetAllEmails(req, res) {
    return res.status(200).json(await (0, emailsubcriber_model_1.getAllEmail)());
}
exports.httpGetAllEmails = httpGetAllEmails;
async function httpAddNewEmails(req, res) {
    const newEmail = req.body;
    // validating email
    if (!newEmail.email) {
        return res.status(400).json({
            error: "Missing required CONTACT PROPERTY Property",
        });
    }
    await (0, emailsubcriber_model_1.sendNewSubcriber)(newEmail);
    return res.status(201).json(newEmail);
}
exports.httpAddNewEmails = httpAddNewEmails;
