const User = require("../models/UserModel");

const allUsers = async (req, res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message: 'Error fetching users', error});
    }
}

const createUser = async (req, res) =>{
    const newUser = new User(req.body);
    try {
        const saveUser= await newUser.save()
    } catch (error) {
        res.json({message:'User Creation error : ', error});
    }
    res.json({message:'New User Created! \n', newUser});
}
module.exports = { allUsers, createUser };