import express from "express"
import { CONFIG } from "./config/config.js";
const app = express()

const PORT = CONFIG.PORT || 3000

app.get("/", (req, res)=>{
  res.send(`
    <h1>Express.js course</h1>
    <p>Running in port ${PORT}</p>
  `);
});

app.listen(PORT, ()=>{
  console.log(`
    App is Running on http://localhost:${PORT}
  `)
})