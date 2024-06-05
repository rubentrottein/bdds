const { welcome } = require("../controllers/MainController");
const { getAllUsers, login, logout, sampleUsers, createUser, getUser, deleteUser, updateUser} = require("../controllers/UserController");
const { getAllMovies, sampleMovies, createMovie, deleteMovie, getMovie, updateMovie} = require("../controllers/MovieController");
const { getAllCategories, createCategory, sampleCategories, deleteCategory, getCategory , updateCategory} = require("../controllers/CategoryController");
const router = require("express").Router();

//General
router.get("/", welcome)

//Users
router.get("/login", login)
router.get("/logout", logout)

router.get("/users/all", getAllUsers)
router.get("/users/get/:id", getUser)
router.post("/users/add", createUser)
router.delete("/users/delete/:id", deleteUser)
router.put("/users/update/:id", updateUser)

//Videos
router.get("/videos/all", getAllMovies)
router.get("/videos/get/:id", getMovie)
router.post("/videos/add", createMovie)
router.delete("/videos/delete/:id", deleteMovie)
router.put("/videos/update/:id", updateMovie)

//Categories
router.get("/categories/all", getAllCategories)
router.get("/categories/get/:id", getCategory)
router.post("/categories/add", createCategory)
router.delete("/categories/delete/:id", deleteCategory)
router.put("/categories/update/:id", updateCategory)

//Sample Data
router.post("/sample/categories", sampleCategories)
router.post("/sample/movies", sampleMovies)
router.post("/sample/users", sampleUsers)

module.exports = router;