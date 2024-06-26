const User = require("../models/UserModel");

const getAllUsers = async (req, res) =>{
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

const getUserById = async (req, res) =>{
    try {
        const userToFind = await User.findOne({_id: req.params.id});
        res.json({message:'Found User : ', user: userToFind});
    } catch (error) {
        res.json({message:'User not found', error});
    }
}

const deleteUserById = async (req, res) =>{
    try{
        const userToDelete = await User.findOneAndDelete({_id: req.params.id }); 
        res.send('Deletion of ' + userToDelete);
    } catch (error){
        res.json({ message : 'User was not deleted ', error } );
    }
}
const editUserById = async (req, res) =>{
    try{
        const userToUpdate = await User.findOneAndUpdate({_id: req.params.id }, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({ message : 'User is now Updated', user: userToUpdate } );
    } catch (error){
        res.json({ message : 'No Update to the User ', error } );
    }
}

module.exports = { getAllUsers, createUser, getUserById, deleteUserById, editUserById};