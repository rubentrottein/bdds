const express = require("express");
const app = express();
const port = 3456;
const mongoose = require("mongoose");

const cors = require('cors');

// Use CORS middleware
app.use(cors());


main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/Ours_db');
    console.log("[DATABASE] MongoDb --Bears-- is connected");
}

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.send("Bienvenue dans l'API des Ours");
})

app.use('/api/bears', require('./routes/bearRoute'));

app.listen(port, ()=> console.log(`[Server] is running on Port : ${port}`));