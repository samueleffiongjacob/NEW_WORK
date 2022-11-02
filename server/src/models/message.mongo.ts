// Importing desstructing mongoose from installed mongoose

import { Schema, model } from "mongoose";

// ORDER SCHEMA CREATION FOR ALL ORDER MODELS
const MessageSchema = new Schema(
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

  // TIME STAMP WOULD BE RESPONSIBLE TO CREATE & UPDATE  DATE & TIME FOR USERS

  // REGISTER IN THE DATABASE

  { timestamps: true }
);

// ASSIGNING SCHEMA ORDER MODELS TO 1 CONSTANT
const Message = model("Message",MessageSchema);

// EXPORTING THE THE MODELS
export default Message;
