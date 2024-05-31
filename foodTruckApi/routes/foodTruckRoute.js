const FoodTruck = require("../models/FoodTruckModel")

const foodTruckRouter = require("express").Router();

foodTruckRouter.get('/all', async (req, res) =>{
    try {
        const foodTrucks = await FoodTruck.find();
        res.json(foodTrucks);
    } catch (error) {
        res.json({message: 'Error retreiving FoodTrucks', error});
    }
})
foodTruckRouter.post('/new',async (req, res) =>{
    const newFoodTruck = new FoodTruck(
        {
            name : req.body.name,
            type : req.body.type,
            menu : req.body.menu.map(item =>({
                dish : item.dish,
                drink : item.drink,
                price : item.price
            }))
        }
    )
    try {
        const saveFoodTruck= await newFoodTruck.save()
        res.json({ message : 'New foodTruck Created \n', foodTruck : saveFoodTruck});
    } catch (error) {
        res.json({ message : 'Error in Creating FoodTruck', error});
    }
})

foodTruckRouter.get('/:id/show',async (req, res) =>{
    try {
        const foodTruckToFind = await FoodTruck.findOne({_id: req.params.id});
        res.json({message:'Find foodTruck : ', foodTruck: foodTruckToFind});
    } catch (error) {
        res.json({message:'foodTruck not found', error});
    }
})
foodTruckRouter.put('/:id/edit',async (req, res) =>{
    try{
        const foodTruckToUpdate = await FoodTruck.findOneAndUpdate({_id: req.params.id }, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({ message : 'foodTruck is now Updated', foodTruck: foodTruckToUpdate } );
    } catch (error){
        res.json({ message : 'No Update to the foodTruck ', error } );
    }
})
foodTruckRouter.delete('/:id/destroy',async (req, res) =>{
    try{
        const foodTruckToDelete = await FoodTruck.findOneAndDelete({_id: req.params.id }); 
        res.send('Ciao foodTruck' + foodTruckToDelete);
    } catch (error){
        res.json({ message : 'foodTruck is still here ', error } );
    }
})

module.exports = foodTruckRouter;