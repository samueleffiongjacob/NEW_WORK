"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewMessage = exports.getAllMessage = void 0;
const message_mongo_1 = __importDefault(require("./message.mongo"));
const apiError_1 = __importDefault(require("../utils/apiError"));
const DEFAULT_FORM_NUMBER = 1;
const form = {
    formNumber: 1,
    name: "Ogidispearl-Project-Limited",
    email: "ogidispearlprojectlimited@gmail.com",
    message: "write message",
    upcoming: false,
    success: true,
};
savedata({ form });
// qury operation befor saving
async function getLatestFormNumber(email) {
    const latestemail = await message_mongo_1.default.findOne().sort(email);
    if (!latestemail) {
        return DEFAULT_FORM_NUMBER;
    }
    return latestemail;
}
// for email purpose general qurey
async function getAllMessage() {
    return await message_mongo_1.default.find({}, {
        __id: 0,
        __v: 0,
    });
}
exports.getAllMessage = getAllMessage;
// SAVING FORM DATABASE
async function savedata(email) {
    try {
        const Email = await message_mongo_1.default.findOne({
            email
        });
        if (!Email) {
            // calling the api error message
            apiError_1.default;
        }
        await message_mongo_1.default.findOneAndUpdate({
            email
        }, email, {
            upsert: true
        });
    }
    catch (error) {
        console.error(`Could not save MESSAGE ${error}`);
    }
}
// A FUNCTION FOR DB SAVE FUNTION LIKE THE MEMORY OWN BELOW
/**
 *
 *  type Awaitable<T> = T | Promise<T>;
 * async function increment(getLatestFormNumber: () => Awaitable<number>): Promise<number> {
  const number = await getLatestFormNumber(1)
  const num = await getNumber.number;
  return number + 1;
}
 */
// A FUNCTION FOR DB SAVE FUNTION LIKE THE MEMORY OWN BELOW
// I WANT TO AUTOMATICALLY INCREASE THE NUMBER IN DATABASE
async function sendNewMessage(message) {
    const newFormNumber = await getLatestFormNumber(1);
    const newMessage = Object.assign(message, {
        success: true,
        upcoming: false,
        FormNumber: newFormNumber,
    });
    await savedata(newMessage);
}
exports.sendNewMessage = sendNewMessage;
