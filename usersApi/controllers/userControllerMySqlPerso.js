const db = require("../index");
const User = require("../models/UserModel");

const query = async (sql, params) => {
    const [results, ] = await db.pool.query(sql, params);
    return results;
};

const getAllUsersMySql = async (req, res) =>{
    try{
        const result = await db.query("SELECT * FROM users")
        res.json({message: "Liste des utilisateurs : ", result})
    } catch (err){
        console.error("Error fetching users:", err);
        res.status(500).json({ error: "Failed to fetch users" });
    }
}
 
const createUserMySql = async (req, res) =>{
    const { name, email } = req.body;
    try{
        const [result] = await db.query("INSERT INTO users (name,email) VALUES (NULL,?,?)", [name,email]);
        res.json({message : "New User Added ", newUser: { id: result.insertId, name, email }});
    } catch (err){
        res.json(err);
    }
}

const getUserById = async (req, res) =>{
    try {
        const userToFind = await User.findOne({_id: req.params.id});
        res.json({message:'Found User : ', user: userToFind});
    } catch (error) {
        res.json({message:'User not found', error});
    }
}
module.exports = { getAllUsersMySql, createUserMySql, getUserById };