"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewSubcriber = exports.getAllEmail = void 0;
const emailsubcriber_mongo_1 = __importDefault(require("./emailsubcriber.mongo"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const DEFAULT_EMAILSUBCRIBER_NUMBER = 1;
const email_sucriber = {
    email_subcrber_Number: 1,
    email: "ogidispearlprojectlimited@gmail.com",
    upcoming: false,
    success: true,
};
saveemail({ email_sucriber });
// qury operation befor saving
async function getLatestEmailNumber(email) {
    const latestemail = await emailsubcriber_mongo_1.default.findOne().sort(email);
    if (!latestemail) {
        return DEFAULT_EMAILSUBCRIBER_NUMBER;
    }
    return latestemail;
}
// for email purpose quering
async function getAllEmail() {
    return await emailsubcriber_mongo_1.default.find({}, {
        __id: 0,
        __v: 0,
    });
}
exports.getAllEmail = getAllEmail;
// SAVING FORM
async function saveemail(email) {
    try {
        const Email = await emailsubcriber_mongo_1.default.findOne({
            email
        });
        if (!Email) {
            // calling the api error message
            apiError_1.default;
        }
        await emailsubcriber_mongo_1.default.findOneAndUpdate({
            email
        }, email, {
            upsert: true
        });
    }
    catch (error) {
        console.error(`Could not save EMAIL ${error}`);
    }
}
// A FUNCTION FOR DB SAVE FUNTION 
// I WANT TO AUTOMATICALLY INCREASE THE NUMBER IN DATABASE
async function sendNewSubcriber(email) {
    const newEmailNumber = await getLatestEmailNumber(1);
    const newEmail = Object.assign(email, {
        success: true,
        upcoming: false,
        email_subcrber_Number: newEmailNumber,
    });
    await saveemail(newEmail);
}
exports.sendNewSubcriber = sendNewSubcriber;
