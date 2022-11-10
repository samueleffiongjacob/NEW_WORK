"use strict";
//IMPORTING DEPENDENY
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRouter = void 0;
const express_1 = __importDefault(require("express"));
const message_controller_1 = __importDefault(require("./message.controller"));
const joi_1 = require("../../utils/joi");
exports.MessageRouter = express_1.default.Router();
//setting for knowing the endpoints/ip requsting
exports.MessageRouter.use((req, res, next) => {
    console.log("ip address :", req.ip);
    next();
});
// endpoint to follow
exports.MessageRouter.get("/", message_controller_1.default.SeeAllForm);
exports.MessageRouter.get("/:formId", message_controller_1.default.SeeOneForm);
exports.MessageRouter.post("/", (0, joi_1.ValidateJoi)(joi_1.Schemas.contact.create), message_controller_1.default.createContactForm);
exports.MessageRouter.patch("/:emailId", (0, joi_1.ValidateJoi)(joi_1.Schemas.contact.update), message_controller_1.default.updateOneForm);
