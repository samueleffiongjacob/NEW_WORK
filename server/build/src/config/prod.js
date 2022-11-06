"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodkeys = void 0;
exports.prodkeys = {
    cookieSecret: process.env.COOKIE_KEY || "PRODUCTION"
};
