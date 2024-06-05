const express = require("express");
const app = express();
const port = 3477;
const mongoose = require("mongoose");
const Movie = require("./models/MovieModel")
const cors = require('cors');

// Use CORS middleware
app.use(cors());
app.use(express.urlencoded({extended:false}))

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/movies_db');
    console.log("[DATABASE] MongoDb --Movies-- is connected");

}

app.use(express.json());
app.use('/api/movies', require('./routes/router'));


app.listen(port, ()=> console.log(`[Server] is running on Port : ${port}`));