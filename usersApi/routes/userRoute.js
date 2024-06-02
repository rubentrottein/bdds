const userRouter = require("express").Router();
const { getAllUsers, createUser, getUserById, deleteUserById, editUserById} = require("../controllers/UserController");
/** Correction */
const { getAllUsersMySql, createUserMySql, getUserByIdMySql, deleteUserByIdMySql, editUserByIdMySql } = require("../controllers/UserControllerMySql");
/** Perso*
const { getAllUsersMySql, createUserMySql, getUserByIdMySql } = require("../controllers/userControllerMySqlPerso");

/** Routes */
userRouter.get('/all', getAllUsers);
userRouter.get('/sql/all', getAllUsersMySql);
/**/
userRouter.post('/new', createUser);
userRouter.post('/sql/new', createUserMySql);

userRouter.get('/:id/show', getUserById);
userRouter.get('/sql/:id/show', getUserByIdMySql);

userRouter.delete('/:id/destroy', deleteUserById);
userRouter.delete('/sql/:id/destroy', deleteUserByIdMySql);

userRouter.put('/:id/edit',editUserById)
userRouter.put('/sql/:id/edit',editUserByIdMySql)

module.exports = userRouter;