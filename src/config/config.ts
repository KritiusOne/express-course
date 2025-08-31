import dotenv from "dotenv"
dotenv.config()
const {
  PORT,
  NODE_ENV,
  CONNECTION_STRING,
  DATABASE_NAME
} = process.env

export const CONFIG = {
  PORT: PORT || 3000,
  NODE_ENV: NODE_ENV || "development",
  CONNECTION_STRING: CONNECTION_STRING || "",
  DATABASE_NAME: DATABASE_NAME || "sample_mflix"
}