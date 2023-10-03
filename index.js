const express = require("express");
const app=express()
const port=5000;
const cors=require("cors")

app.use(cors())
app.listen(port,()=>{
    console.log(`port started on http://localhost:${port}/`);
})

app.get("/",(req,res)=>{
    res.send("hell duniya")

})

app.get("/notes",(req,res)=>{
    const notes=[{
        text:"adivya",
        link:"student"
    },{
        text:"rahul",
        link:"peon"
    }]
    res.json({notes:notes});
})