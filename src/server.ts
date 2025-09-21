import bodyParser from "body-parser";
import express from "express";
import { loggerMiddleware } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { CONFIG } from "./config/config.js";
import { router } from "./routes/index.js";

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/api/v1", router)
app.use(loggerMiddleware)
app.use(errorHandler)

app.get("/", (req, res)=>{
  return res.send(`
    <h1>Express.js course</h1>
    <p>Running in port ${CONFIG.PORT}</p>
  `);
});
app.listen(CONFIG.PORT, ()=>{
  console.log(`
    App is Running on http://localhost:${CONFIG.PORT}
  `)
})