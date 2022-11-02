//IMPORT SOURCE FILES
import apps from "./src/app";
import dotenv from "dotenv";
dotenv.config();

// TO DO IMPORT DATABASE
const { connectToDatabase } = require("./src/services/database.service");


const http = require("http");

const PORT = process.env.PORT || 8000;

const server = http.createServer(apps);

// CRREATNG AN ASYNC FUNCTION THAT WAIT FOR DB IN COMMONJS
async function startServer() {
  await connectToDatabase()
  

  server.listen(PORT, () => {
    console.log(`NASA SERVER IS RUNNING ON PORT ${PORT}....`);
  });
}
startServer();
