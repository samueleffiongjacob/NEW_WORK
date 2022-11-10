"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IMPORT SOURCE FILES and DEPENDENCY
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./src/app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// TO DO IMPORT config and loggers
const logging_1 = __importDefault(require("./src/utils/logging"));
const config_1 = require("./src/config/config");
/** Connect to Mongo  and STARTING SERVER*/
mongoose_1.default
    .connect(config_1.config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
    logging_1.default.info('Mongo connected successfully.');
    (0, app_1.default)();
})
    .catch((error) => logging_1.default.error(error));
