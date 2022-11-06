// IMORTING DEPENDENCYS
import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IContact } from '../models/message.mongo';
import  { Iemailsubcriber } from '../models/emailsubcriber.mongo';
import Logging from './logging';


//VALIDATING SCHEMAS FROM MODELS
export const ValidateJoi  = (schema: ObjectSchema) => {
    return async (req: Request, res: Response, next: NextFunction ) => {
        try {
            await schema.validateAsync(req.body);

            next()
        } catch (error) {
            Logging.error(error);
            return res.status(422).json({ error });
        }
    };
};

// VALIDATING EACH FIELS
export const Schemas = {
    contact: {
        create: Joi.object<IContact>({
            name: Joi.string().required(),
            email: Joi.string().required(),
            message:Joi.string().required()
        }),

        update : Joi.object<IContact>({
            name: Joi.string().required(),
            email: Joi.string().required(),
            message: Joi.string().required()
        }),
    },

    emailsubcriber : {
        create: Joi.object<Iemailsubcriber>({
            email: Joi.string().required(),
        }),

        update : Joi.object<Iemailsubcriber>({
            email: Joi.string().required(),
        }),
    }
}