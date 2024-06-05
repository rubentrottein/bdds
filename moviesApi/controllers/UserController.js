const User = require("../models/UserModel");

async function getAllUsers(req, res){
    try{
        const users = await User.find();
        res.json(users);
    } catch (e){
        res.json({message:"Error getting Users List ... \n", e})
    }
}


function login(req, res){
    res.json({message:  "[DEMO] Successfully logged in"});
}
function logout(req, res){
    res.json({message:  "[DEMO] Successfully logged out"});
}

async function sampleUsers(req, res){
    try{

        const defaultUsers = [
            {name :"user", email: "user@movies.io", password: "user"},
            {name :"admin", email: "admin@movies.io", password: "admin"},
            {name :"modo", email: "modo@movies.io", password: "modo"}
        ];
        
        for(let user of defaultUsers){
            const saveMovie= await new User(user).save();
        }
        res.json({message:"Trois utilisateurs ajoutés en Bdd Exemple \n"})
    } catch (e){
        res.json({message:"Error creating sample ... \n", e})
    }
}


async function createUser(req, res){
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        const saveUsers= await new User(user).save();
        res.json({message:"User created Successfully \n", savedUser : user})
    } catch (error) {
        res.json({message:"Error creating User ... \n", error})
    }
}
async function deleteUser(req, res){
    try {
        console.log({_id: req.params.id });
        const deletedUser = await User.findOneAndDelete({_id: req.params.id });
        res.json({message:"User deleted Successfully \n", user: deletedUser});
    } catch (error) {
        res.json({message:"Error Deleting User ... \n", error});
    }
}
async function getUser(req, res){
    try{
        const userToGet = await User.findOne({_id: req.params.id});
        res.json({message:"Utilisateur trouvée : \n", user: userToGet})
    } catch (error){
        res.json({message:"Utilisateur introuvable ... \n", error})
    }
}
async function updateUser(req, res){
    try{
        const userToUpdate = await User.findOneAndUpdate({_id: req.params.id}, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({message:"Utilisateur Mis à jour : \n", user: userToUpdate})
    } catch (error){
        res.json({message:"Utilisateur introuvable ... \n", error})
    }
}
module.exports = { getAllUsers,createUser, deleteUser,getUser, updateUser, sampleUsers, login, logout};