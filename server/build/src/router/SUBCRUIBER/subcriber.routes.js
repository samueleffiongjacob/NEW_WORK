"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcriberRouter = void 0;
const express_1 = __importDefault(require("express"));
const subcriber_controller_1 = require("./subcriber.controller");
exports.SubcriberRouter = express_1.default.Router();
//setting for knowing the endpoints/ip requsting
exports.SubcriberRouter.use((req, res, next) => {
    console.log("ip address :", req.ip);
    next();
});
// endpoint to follow
exports.SubcriberRouter.get("/", subcriber_controller_1.httpGetAllEmails);
exports.SubcriberRouter.post("/", subcriber_controller_1.httpAddNewEmails);
