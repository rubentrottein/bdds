const express = require("express");
const app = express();
const port = 3444;
const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://localhost:27017/FoodTruck_db');
    console.log("[DATABASE] MongoDb --FoodTrucks-- is connected");
}

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.send("Bienvenue dans FoodTruckAPI 1.0");
})

app.use('/api/foodTruck', require('./routes/foodTruckRoute'));

app.listen(port, ()=> console.log(`[Server] is running on Port : ${port}`));