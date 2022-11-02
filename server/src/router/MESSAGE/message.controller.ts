import { getAllMessage,   sendNewMessage } from "../../models/message.model"

export async function httpGetAllMessage(req, res) {
  return res.status(200).json(await getAllMessage());
}


export async function httpAddNewMessage(req, res) {
  const message = req.body;
  if (
    !message.name ||
    !message.email ||
    !message.message 
  ) {
    return res.status(400).json({
      error: "Missing required CONTACT PROPERTY Property",
    });
  }

   await sendNewMessage(message);
   return res.status(201).json(message);
  
}
