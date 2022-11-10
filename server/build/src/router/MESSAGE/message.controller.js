"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//IPORTING DEPENDENCY
const message_mongo_1 = __importDefault(require("../../models/message.mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
// CREATING FORM
const createContactForm = (req, res, next) => {
    const { name = "fullname", type = "email", message } = req.body;
    const newForm = new message_mongo_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        name,
        type,
        message
    });
    return newForm
        .save()
        .then((newForm) => res.status(201).json({ newForm }))
        .catch((error) => res.status(500).json({ error }));
};
// FINE ONE FORM
const SeeOneForm = (req, res, next) => {
    const newFormId = req.params.formId;
    return message_mongo_1.default.findById(newFormId)
        .populate('newForm')
        .select('__v')
        .then((newForm) => (newForm ? res.status(200).json({ newForm }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};
// FINE ALL FORM
const SeeAllForm = (req, res, next) => {
    return message_mongo_1.default.find()
        .populate('newForm')
        .select('__v')
        .then((newForm) => res.status(200).json({ newForm }))
        .catch((error) => res.status(500).json({ error }));
};
//UPDATE ALL FORM
const updateOneForm = (req, res, next) => {
    const newFormId = req.params.formId;
    return message_mongo_1.default.findById(newFormId)
        .then((newForm) => {
        if (newForm) {
            newForm.set(req.body);
            return newForm
                .save()
                .then((newForm) => res.status(201).json({ newForm }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createContactForm, updateOneForm, SeeOneForm, SeeAllForm };
