import express from "express"

import { httpGetAllEmails ,httpAddNewEmails } from "./subcriber.controller"

export const SubcriberRouter = express.Router();

//setting for knowing the endpoints/ip requsting
SubcriberRouter.use((req, res, next) => {
  console.log("ip address :", req.ip);
  next();
});

// endpoint to follow
SubcriberRouter.get("/", httpGetAllEmails);
SubcriberRouter.post("/", httpAddNewEmails);



