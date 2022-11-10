"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcriberRouter = void 0;
const express_1 = __importDefault(require("express"));
const subcriber_controller_1 = __importDefault(require("./subcriber.controller"));
const joi_1 = require("../../utils/joi");
exports.SubcriberRouter = express_1.default.Router();
//setting for knowing the endpoints/ip requsting
exports.SubcriberRouter.use((req, res, next) => {
    console.log("ip address :", req.ip);
    next();
});
//emailsubcriber
// endpoint to follow
exports.SubcriberRouter.get("/", subcriber_controller_1.default.SeeAllEmailLSub);
exports.SubcriberRouter.get("/:emailId", subcriber_controller_1.default.OneEmailSub);
exports.SubcriberRouter.post("/", (0, joi_1.ValidateJoi)(joi_1.Schemas.emailsubcriber.create), subcriber_controller_1.default.createEmailSub);
exports.SubcriberRouter.patch("/:emailId", (0, joi_1.ValidateJoi)(joi_1.Schemas.emailsubcriber.update), subcriber_controller_1.default.updateEmailsub);
