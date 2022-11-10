"use strict";
// Importing desstructing mongoose from installed mongoose
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// ORDER SCHEMA CREATION FOR ALL ORDER MODELS
const ContactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    // TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS
    // REGISTER IN THE DATABASE
    versionKey: false,
    timestamps: true
});
// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const Contacts = (0, mongoose_1.model)("Contact", ContactSchema);
// EXPORTING THE THE MODELS
exports.default = Contacts;
