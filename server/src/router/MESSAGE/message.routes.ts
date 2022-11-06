//IMPORTING DEPENDENY

import express from "express"

import Contactcontrollers from "./message.controller"
import {Schemas, ValidateJoi } from '../../utils/joi'
export const MessageRouter = express.Router();

//setting for knowing the endpoints/ip requsting
MessageRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});


// endpoint to follow
MessageRouter.get("/", Contactcontrollers.SeeAllForm);
MessageRouter.get("/:formId", Contactcontrollers.SeeOneForm);
MessageRouter.post("/", ValidateJoi(Schemas.contact.create),Contactcontrollers.createContactForm);
MessageRouter.patch("/:emailId", ValidateJoi(Schemas.contact.update), Contactcontrollers.updateOneForm);



