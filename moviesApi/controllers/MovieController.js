const Movie = require("../models/MovieModel");
const { findOneAndDelete } = require("../models/UserModel");

async function sampleMovies(req, res){
    try{

        const defaultMovies = [
            {name:"Forrest Gump", style:"Drame",image:"Forrest.webp"},
            {name:"Apocalypse Now", style:"Guerre",image:"Apocalypse.webp"},
            {name:"La Grande Vadrouille", style:"Comédie",image:"Vadrouille.jpg"}
        ];

        for(let movie of defaultMovies){
            const saveMovie= await new Movie(movie).save();
        }
        res.json({message:"Trois films ajoutés en Bdd Exemple \n"})
    } catch (e){
        res.json({message:"Error creating sample ... \n", e})
    }
}

async function streamMovie(req, res){
    try{
        const movie = await Movie.getAssetAsBlob(req.params.body);
        
        //const playMovie= await new Movie(movie).play();
        res.json({message:"Lecture du film \n"})
    } catch (e){
        res.json({message:"Error creating sample ... \n", e})
    }
}

async function getAllMovies(req, res){
    
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.json({message: 'Error fetching movies', error});
    }
}


async function createMovie(req, res){
    try{
        const movie = {
            name: req.body.name,
            style: req.body.style,
            image: req.body.image
        };
        const saveMovie= await new Movie(movie).save();
        res.json({message:"Ajout d'un film : \n", movie})
    } catch (error){
        res.json({message:"Error Adding Movie ... \n", error})
    }
}
async function deleteMovie(req, res){
    try{
        const deleteMovie= await Movie.findOneAndDelete({_id: req.params.id});
        res.json({message:"Effacement d'un film : \n", movie: deleteMovie})
    } catch (error){
        res.json({message:"Error Deleting Movie ... \n", error})
    }
}
async function getMovie(req, res){
    try{
        const movieToGet = await Movie.findOne({_id: req.params.id});
        res.json({message:"Film trouvé : \n", movie: movieToGet})
    } catch (error){
        res.json({message:"film introuvable ... \n", error})
    }
}
async function updateMovie(req, res){
    try{
        const movieToUpdate = await Movie.findOneAndUpdate({_id: req.params.id}, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({message:"Catégorie Mise à jour : \n", movie: movieToUpdate})
    } catch (error){
        res.json({message:"Catégorie introuvable ... \n", error})
    }
}
module.exports = { getAllMovies, sampleMovies, createMovie, deleteMovie, getMovie, updateMovie };