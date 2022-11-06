// Importing desstructing mongoose from installed mongoose

import { Document,  Schema, model } from "mongoose";

// VALIDATION OF EMAIL AND NAME  TO BE STRING FOR JOI

export interface Iemailsubcriber {
  email: string
}

export interface IemailsubcriberModel extends Iemailsubcriber,  Document{}

// EMAILSUBCRIBER SCHEMA CREATION FOR ALL EMAILSUBCRIBER MODELS
const emailsubcriberSchema = new Schema(
  {
   
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    // TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS

   // REGISTER IN THE DATABASE
   versionKey: false,
   timestamps: true 
  }

  
);

// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const emailsubcriber = model <IemailsubcriberModel> ("emailsubcriber",emailsubcriberSchema);

// EXPORTING THE THE MODELS
export  default  emailsubcriber;
