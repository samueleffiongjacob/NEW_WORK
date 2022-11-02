import emailsubcriber from "./emailsubcriber.mongo";
import APIError from "../utils/apiError";

const DEFAULT_EMAILSUBCRIBER_NUMBER = 1;

const email_sucriber = {
    email_subcrber_Number:1,
    email: "ogidispearlprojectlimited@gmail.com",
    upcoming: false, 
    success: true,
}
saveemail({email_sucriber})

// qury operation befor saving
async function getLatestEmailNumber(email:any) {
  const latestemail = await emailsubcriber.findOne().sort(email);

  if (!latestemail) {
    return DEFAULT_EMAILSUBCRIBER_NUMBER;
  }

  return latestemail;
}

// for email purpose quering
export async function getAllEmail() {
    return await emailsubcriber.find(
    {},
    {
      __id: 0,
      __v: 0,
    }
  );
}


// SAVING FORM
async function saveemail(email:any) {
    try {
        const Email = await emailsubcriber.findOne({
          email
        })

        if (!Email){
          // calling the api error message
            APIError
        }

        await emailsubcriber.findOneAndUpdate(
            {
                email
            },
            email,
            {
                upsert:true
            }

            )
    } catch (error) {
        console.error(`Could not save EMAIL ${error}`)
    }
}


// A FUNCTION FOR DB SAVE FUNTION 
// I WANT TO AUTOMATICALLY INCREASE THE NUMBER IN DATABASE
export async function sendNewSubcriber(email:any,) {
  const newEmailNumber = await getLatestEmailNumber(1);
  const newEmail = Object.assign(email, {
    success: true,
    upcoming: false,
    email_subcrber_Number: newEmailNumber ,
  });

  await saveemail(newEmail);
}




