import express from "express"

import { httpGetAllMessage ,httpAddNewMessage } from "./message.controller"

export const MessageRouter = express.Router();

//setting for knowing the endpoints/ip requsting
MessageRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});

// endpoint to follow
MessageRouter.get("/", httpGetAllMessage);
MessageRouter.post("/", httpAddNewMessage);



