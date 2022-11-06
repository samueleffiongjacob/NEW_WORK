//IMPORT SOURCE FILES and DEPENDENCY
import mongoose from 'mongoose';
import servertapp from "./src/app";
import dotenv from "dotenv";
dotenv.config();

// TO DO IMPORT config and loggers
import Logging from './src/utils/logging'
import { config } from './src/config/config';


/** Connect to Mongo  and STARTING SERVER*/
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Mongo connected successfully.');
        servertapp();
    })
    .catch((error) => Logging.error(error));


