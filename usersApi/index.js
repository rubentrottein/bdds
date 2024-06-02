const express = require("express");
const app = express();
const port = 3434;
const mongoose = require("mongoose");
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({extended:false}))

// Use CORS middleware
app.use(cors());

/*connexion SQL normale**
const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'user_db',
})
db.connect((err)=>{
    if(err){
        console.error("Error connecting to MySQL" , err); 
    } else {
        console.info("Connexion a MySQL Réussie");
    }
})

module.exports = db;

/** */
/**Connexion SQL via promise */

const mysql = require("mysql2/promise");
const dbPromise = () => {
  return mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "user_db"
  });
};

dbPromise()
  .then((connection) => {
    console.log("Connected to MySQL");
    app.set("db", connection);
  })
  .catch((err) => {
    console.error("Error connecting to MySQL:", err);
});

/* Connexion MongoDB */
//mongoDb Connection
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://localhost:27017/User_db');
    console.log("[DATABASE] MongoDb --Users-- is connected");
}
/**/

//Main route
app.get("/", (req, res) => {
    res.send("Bienvenue dans l'API des Utilisateurs");
})


app.use('/api/users', require('./routes/userRoute'));

app.listen(port, ()=> console.info(`[Server] is running on http://localhost:${port}`));
