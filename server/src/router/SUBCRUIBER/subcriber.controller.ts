// IMPORTING DEPENDCY
import emailsubcriber from "../../models/emailsubcriber.mongo";
import mongoose from 'mongoose';
import { NextFunction, Request, Response } from 'express';


// CREATING SUBCRIBE EMAIL
const createEmailSub = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const newMail = new emailsubcriber({
        _id: new mongoose.Types.ObjectId(),
        email
    });

    return newMail
        .save()
        .then((newMail) => res.status(201).json({ newMail}))
        .catch((error) => res.status(500).json({ error }));
};

// qury one emailsubcriber
const OneEmailSub = (req: Request, res: Response, next: NextFunction) => {
    const emailSubcriber= req.params.emailId;

    return emailsubcriber.findById(emailSubcriber)
        .populate('newForm')
        .select('__v')
        .then((newMail) => (newMail ? res.status(200).json({ newMail }) : res.status(404).json({ message: 'not found' })))
        .catch((error) => res.status(500).json({ error }));
};

// QURY ALL SUBCRIBER
const SeeAllEmailLSub = (req: Request, res: Response, next: NextFunction) => {
    return emailsubcriber.find()
        .populate('author')
        .select('__v')
        .then((newMail) => res.status(200).json({ newMail }))
        .catch((error) => res.status(500).json({ error }));
};

// UPDATE ALL subcriber
const updateEmailsub = (req: Request, res: Response, next: NextFunction) => {
    const emailSubcriber = req.params.emailId;

    return emailsubcriber.findById( emailSubcriber )
        .then((newMail) => {
            if (newMail) {
                newMail.set(req.body);

                return newMail
                    .save()
                    .then((newMail) => res.status(201).json({ newMail }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                return res.status(404).json({ message: 'not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};

export default { createEmailSub, SeeAllEmailLSub, OneEmailSub , updateEmailsub };