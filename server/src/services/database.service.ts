import  mongoose from "mongoose";
import * as dotenv from "dotenv";

export function connectToDatabase(DB_URI: string) {
   dotenv.config();
   const connect = async () => {
      try {
          await mongoose.connect(DB_URI);
          mongoose.connection.once("open", () => { console.log("MONGODB CONNECT GETTING READY")});
          mongoose.connection.on("error", (err) => {console.error(err);});
          console.log('Successfully connected to database .........')

      } catch (error) {
         console.error('Error connecting to database: ', error);
         return process.exit(1);
      }
   }
   connect();
    mongoose.connection.on('disconnected', connect);
}

export async function mongoDisconnect() {
  await mongoose.disconnect();
}
