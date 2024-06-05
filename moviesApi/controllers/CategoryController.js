const Category = require("../models/CategoryModel");

const getAllCategories = async (req, res) =>{
    try {
        const category = await Category.find();
        res.json(category);
    } catch (error) {
        res.json({message: 'Error fetching categories', error});
    }
}
async function sampleCategories(req, res){
    try{

        const defaultCategories = [
            {name :"Drame"},
            {name :"Guerre"},
            {name :"Comédie"}
        ];
        
        for(let category of defaultCategories){
            const saveMovie= await new Category(category).save();
        }
        res.json({message:"Trois catégories ajoutées en Bdd Exemple \n"})
    } catch (error){
        res.json({message:"Error creating sample ... \n", error})
    }
}
async function createCategory(req, res){
    try {
        const category = {name:req.body.name};
        const saveCategory= await new Category(category).save();
        res.json({message:"Creation of category OK"})
    } catch (error) {
        res.json({message:"Error creating category ... \n", error})
    }
}
async function getCategory(req, res){
    try{
        const categoryToGet = await Category.findOne({_id: req.params.id});
        res.json({message:"Catégorie trouvée : \n", category: categoryToGet})
    } catch (error){
        res.json({message:"Catégorie introuvable ... \n", error})
    }
}
async function updateCategory(req, res){
    try{
        const categoryToUpdate = await Category.findOneAndUpdate({_id: req.params.id}, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({message:"Catégorie Mise à jour : \n", category: categoryToUpdate})
    } catch (error){
        res.json({message:"Catégorie introuvable ... \n", error})
    }
}
async function deleteCategory(req, res){
    try{
        const deleteCategory = await Category.findOneAndDelete({_id: req.params.id});
        res.json({message:"Effacement d'une catégorie : \n", category: deleteCategory})
    } catch (error){
        res.json({message:"Error Deleting Category ... \n", error})
    }
}
module.exports = { getAllCategories,getCategory, sampleCategories, createCategory, deleteCategory, updateCategory};