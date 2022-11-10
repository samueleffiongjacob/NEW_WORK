"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = exports.ValidateJoi = void 0;
// IMORTING DEPENDENCYS
const joi_1 = __importDefault(require("joi"));
const logging_1 = __importDefault(require("./logging"));
//VALIDATING SCHEMAS FROM MODELS
const ValidateJoi = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();
        }
        catch (error) {
            logging_1.default.error(error);
            return res.status(422).json({ error });
        }
    };
};
exports.ValidateJoi = ValidateJoi;
// VALIDATING EACH FIELS
exports.Schemas = {
    contact: {
        create: joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            message: joi_1.default.string().required()
        }),
        update: joi_1.default.object({
            name: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            message: joi_1.default.string().required()
        }),
    },
    emailsubcriber: {
        create: joi_1.default.object({
            email: joi_1.default.string().required(),
        }),
        update: joi_1.default.object({
            email: joi_1.default.string().required(),
        }),
    }
};
