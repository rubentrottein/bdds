const express = require("express");
const app = express();
const port = 3434;
const mongoose = require("mongoose");
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Use CORS middleware
app.use(cors());

//mongoDb Connection
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/User_db');
    console.log("[DATABASE] MongoDb --Users-- is connected");
}

//Main route
app.get("/", (req, res) => {
    res.send("Bienvenue dans l'API des Utilisateurs");
})


app.use('/api/users', require('./routes/userRoute'));

app.listen(port, ()=> console.info(`[Server] is running on Port : ${port}`));