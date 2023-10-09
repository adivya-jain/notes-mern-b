//connecting the backend and the database
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/notes-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:')); 
db.once('open',function()
{
    //we're connected
    console.log("db is now connected");
});
