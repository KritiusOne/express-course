import express from "express"
import { CONFIG } from "./config/config.js";
import bodyParser from "body-parser";
import { loggerMiddleware } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(loggerMiddleware);
app.use(errorHandler)

const PORT = CONFIG.PORT || 3000

app.get("/", (req, res)=>{
  res.send(`
    <h1>Express.js course</h1>
    <p>Running in port ${PORT}</p>
  `);
});

app.get("/users/:id", (req, res)=> {
  const userId = req.params.id;
  res.send(`Show user information with id ${userId}`)
})

app.get("/search", (req, res)=>{
  const terms = req.query.tag || "";
  const category = req.query.category || "All";
  res.send(`
    <h2>Search result: </h2>
    <p>Tag: ${terms} </p>
    <p>category: ${category} </p>
  `)
})

app.post("/form", (req, res)=>{
  const name = req.body.name || "John Doe";
  const email = req.body.email || "";

  res.json({
    message: "Received data",
    data: {
      name, email
    }
  });

});

app.post("/api/data", (req, res)=>{
  const data = req.body;
  console.log(req.body)

  if(!data || !Object.keys(data).length){
    return res.status(400).json({ error: "Data no received" });
  }

  res.status(200).json({
    message: "Data received successfully",
    data
  })
});

app.get("/error", (req, res, next)=>{
  next(new Error("Wished error"))
})

app.listen(PORT, ()=>{
  console.log(`
    App is Running on http://localhost:${PORT}
  `)
})