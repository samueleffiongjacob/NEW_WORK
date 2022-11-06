"use strict";
// Importing desstructing mongoose from installed mongoose
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// ORDER SCHEMA CREATION FOR ALL ORDER MODELS
const emailsubcriberSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    versionKey: false
}, 
// TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS
// REGISTER IN THE DATABASE
{ timestamps: true });
// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const emailsubcriber = (0, mongoose_1.model)("emailsubcriber", emailsubcriberSchema);
// EXPORTING THE THE MODELS
exports.default = emailsubcriber;
