import { Document, Types } from "mongoose";
import { getAllEmail, sendNewSubcriber } from "../../models/emailsubcriber.model"


export async function httpGetAllEmails(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: (Document<unknown, any, { email: string; }> & { email: string; } & { _id: Types.ObjectId; })[]): any; new(): any; }; }; }) {
  return res.status(200).json(await getAllEmail());
}


export async function httpAddNewEmails(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; }) {
  const newEmail = req.body;

  // validating email
  if (
    !newEmail .email
  ) {
    return res.status(400).json({
      error: "Missing required CONTACT PROPERTY Property",
    });
  }

   await sendNewSubcriber(newEmail);
   return res.status(201).json(newEmail);
  
}
