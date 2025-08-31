import { MongoClient } from "mongodb";
import { CONFIG } from "./config.js";

const Client = new MongoClient(CONFIG.CONNECTION_STRING)
export async function DB(){
  try {
    const db = Client.db(CONFIG.DATABASE_NAME)
    console.log("======================")
    console.log("DB Connected!")
    console.log("======================")
    return db
  } catch (error) {
    console.log(error)
    throw new Error("Error on DB connection")
  }

}