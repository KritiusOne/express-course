import dotenv from "dotenv"
dotenv.config()
const {
  PORT,
  NODE_ENV,
  CONNECTION_STRING
} = process.env

export const CONFIG = {
  PORT,
  NODE_ENV,
  CONNECTION_STRING
}