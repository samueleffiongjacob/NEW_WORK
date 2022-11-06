// Importing desstructing mongoose from installed mongoose

import { Document, Schema, model } from "mongoose";

export interface IContact {
  name: string;
  email:string;
  message: string;
}

export interface IContactModel extends IContact, Document {}
// ORDER SCHEMA CREATION FOR ALL ORDER MODELS
const ContactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },


    message: {
      type: String,
      required: true,
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
const Contacts = model <IContactModel> ("Contact",ContactSchema);

// EXPORTING THE THE MODELS
export default Contacts;
