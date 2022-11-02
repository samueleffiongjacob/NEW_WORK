// Importing desstructing mongoose from installed mongoose

import { Schema, model } from "mongoose";

// ORDER SCHEMA CREATION FOR ALL ORDER MODELS
const emailsubcriberSchema = new Schema(
  {
   
    email: {
      type: String,
      required: true,
      unique: true,
    },

    
  },

  // TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS

  // REGISTER IN THE DATABASE

  { timestamps: true }
);

// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const emailsubcriber = model("emailsubcriber",emailsubcriberSchema);

// EXPORTING THE THE MODELS
export  default  emailsubcriber;
