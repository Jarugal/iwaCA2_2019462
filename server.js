const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://user_1:TXiuZFVvjhyb9G7N@cluster0.ckn69.mongodb.net/?retryWrites=true&w=majority/notesDB",{useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(!err) console.log('db connected');
    else console.log('db error');
})

app.use("/", require("./routes/noteRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001");
})

