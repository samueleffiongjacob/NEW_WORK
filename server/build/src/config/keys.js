"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keys = void 0;
const dev_1 = require("./dev");
const prod_1 = require("./prod");
const keys = () => {
    if (process.env.NODE_ENV === "production") {
        return prod_1.prodkeys;
    }
    else {
        return dev_1.devKeys;
    }
};
exports.keys = keys;
