const User = require("../models/UserModel");
const { allUsers, createUser } = require("../controllers/UserController");

const userRouter = require("express").Router();

userRouter.get('/all', allUsers);

userRouter.post('/new', createUser);

userRouter.get('/:id/show',async (req, res) =>{
    try {
        const userToFind = await User.findOne({_id: req.params.id});
        res.json({message:'Found User : ', user: userToFind});
    } catch (error) {
        res.json({message:'User not found', error});
    }
})

userRouter.delete('/:id/destroy',async (req, res) =>{
    try{
        const userToDelete = await User.findOneAndDelete({_id: req.params.id }); 
        res.send('Deletion of ' + userToDelete);
    } catch (error){
        res.json({ message : 'User was not deleted ', error } );
    }
})

userRouter.put('/:id/edit',async (req, res) =>{
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
})

module.exports = userRouter;