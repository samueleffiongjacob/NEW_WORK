"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTING DEPENDCY
const emailsubcriber_mongo_1 = __importDefault(require("../../models/emailsubcriber.mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
// CREATING SUBCRIBE EMAIL
const createEmailSub = (req, res, next) => {
    const { email } = req.body;
    const newMail = new emailsubcriber_mongo_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        email
    });
    return newMail
        .save()
        .then((newMail) => res.status(201).json({ newMail }))
        .catch((error) => res.status(500).json({ error }));
};
// qury one emailsubcriber
const OneEmailSub = (req, res, next) => {
    const emailSubcriber = req.params.emailId;
    return emailsubcriber_mongo_1.default.findById(emailSubcriber)
        .populate('newForm')
        .select('__v')
        .then((newMail) => (newMail ? res.status(200).json({ newMail }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
// QURY ALL SUBCRIBER
const SeeAllEmailLSub = (req, res, next) => {
    return emailsubcriber_mongo_1.default.find()
        .populate('author')
        .select('__v')
        .then((newMail) => res.status(200).json({ newMail }))
        .catch((error) => res.status(500).json({ error }));
};
// UPDATE ALL subcriber
const updateEmailsub = (req, res, next) => {
    const emailSubcriber = req.params.emailId;
    return emailsubcriber_mongo_1.default.findById(emailSubcriber)
        .then((newMail) => {
        if (newMail) {
            newMail.set(req.body);
            return newMail
                .save()
                .then((newMail) => res.status(201).json({ newMail }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createEmailSub, SeeAllEmailLSub, OneEmailSub, updateEmailsub };
