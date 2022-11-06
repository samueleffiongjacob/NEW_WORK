"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIError extends Error {
    static handle(error, _req, res, next) {
        res.status(500).json({ message: error.message || `Internal Server Error` });
        next();
    }
    static notFound(error, _req, res, next) {
        res.status(404).json({ message: error.message || `Not Found` });
        next();
    }
    static badRequest(error, _req, res, next) {
        res.status(400).json({ message: error.message || `Invalid Request` });
        next();
    }
    static customError(error, _req, res, next) {
        res.status(500).json({ message: error.message || `Unknown Error` });
        next();
    }
}
exports.default = {
    APIError
};
