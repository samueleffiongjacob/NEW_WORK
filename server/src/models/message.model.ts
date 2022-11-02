import Message from "./message.mongo";
import APIError from "../utils/apiError";


const DEFAULT_FORM_NUMBER = 1;

const form = {
    formNumber:1,
    name: "Ogidispearl-Project-Limited",
    email: "ogidispearlprojectlimited@gmail.com",
    message: "write message", 
    upcoming: false, 
    success: true,
}
savedata({form})

// qury operation befor saving
async function getLatestFormNumber(email:any) {
  const latestemail = await Message.findOne().sort(email);

  if (!latestemail) {
    return DEFAULT_FORM_NUMBER;
  }

  return latestemail;
}

// for email purpose general qurey
export async function getAllMessage() {
    return await Message.find(
    {},
    {
      __id: 0,
      __v: 0,
    }
  );
}


// SAVING FORM DATABASE
async function savedata(email:any) {
    try {
        const Email = await Message.findOne({
          email
        })

        if (!Email){
          // calling the api error message
            APIError
        }

        await Message.findOneAndUpdate(
            {
                email
            },
            email,
            {
                upsert:true
            }

            )
    } catch (error) {
        console.error(`Could not save MESSAGE ${error}`)
    }
}



// A FUNCTION FOR DB SAVE FUNTION LIKE THE MEMORY OWN BELOW

/**
 * 
 *  type Awaitable<T> = T | Promise<T>;
 * async function increment(getLatestFormNumber: () => Awaitable<number>): Promise<number> {
  const number = await getLatestFormNumber(1)
  const num = await getNumber.number;
  return number + 1;
}
 */




// A FUNCTION FOR DB SAVE FUNTION LIKE THE MEMORY OWN BELOW
// I WANT TO AUTOMATICALLY INCREASE THE NUMBER IN DATABASE
export async function sendNewMessage(message:any,) {
  const newFormNumber = await getLatestFormNumber(1);
  const newMessage = Object.assign(message, {
    success: true,
    upcoming: false,
    FormNumber: newFormNumber,
  });

  await savedata(newMessage);
}




