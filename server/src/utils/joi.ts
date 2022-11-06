import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IContact } from '../models/message.mongo';
import  { Iemailsubcriber } from '../models/emailsubcriber.mongo';
import Logging from './logging';


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

export const Schemas = {
    contact: {
        create: Joi.object<IContact>({
            name: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            message:Joi.string().required()
        }),

        update : Joi.object<IContact>({
            name: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            message: Joi.string().required()
        }),
    },

    emailsubcriber : {
        create: Joi.object<Iemailsubcriber>({
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),

        update : Joi.object<Iemailsubcriber>({
            email: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        }),
    }
}