const express = require("express");
const app=express()
const port=5000;
const cors=require("cors")

const bodyParser=require("body-parser")

require('./db')
app.use(express.json())
const {notesRouter} = require('./api/v1/index')
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hell duniya")
})

app.use("/notes",notesRouter)
app.listen(port,()=>{
    console.log(`port started on http://localhost:${port}`);
})
