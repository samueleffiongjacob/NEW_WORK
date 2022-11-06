import MESSAGE from "../../models/message.mongo";
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';



const createContactForm = (req: Request, res: Response, next: NextFunction) => {
    const { name="fullname" , type="email", message} = req.body;

    const newForm = new MESSAGE({
        _id: new mongoose.Types.ObjectId(),
        name,
        type,
        message
    });

    return newForm
        .save()
        .then((newForm) => res.status(201).json({ newForm}))
        .catch((error) => res.status(500).json({ error }));
};

// qury one emailsubcriber
const SeeOneForm = (req: Request, res: Response, next: NextFunction) => {
    const newFormId = req.params.formId;

    return MESSAGE.findById( newFormId )
        .then((newForm) => (newForm ? res.status(200).json({ newForm }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

const SeeAllForm = (req: Request, res: Response, next: NextFunction) => {
    return MESSAGE.find()
        .then((newForm) => res.status(200).json({ newForm }))
        .catch((error) => res.status(500).json({ error }));
};

const updateOneForm = (req: Request, res: Response, next: NextFunction) => {
    const newFormId = req.params.formId;

    return MESSAGE.findById( newFormId )
        .then((newForm) => {
            if (newForm) {
                newForm.set(req.body);

                return newForm
                    .save()
                    .then((newForm) => res.status(201).json({ newForm }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

export default { createContactForm, updateOneForm, SeeOneForm, SeeAllForm };