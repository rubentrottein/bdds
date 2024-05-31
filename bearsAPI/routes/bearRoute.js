const Bear = require("../models/BearModel");

const bearRouter = require("express").Router();


/**TODO
 * GET ALL
 * POST
 * GET 1
 * PUT 1
 * DELETE 1
 * const data = [
        {"name":"Lisa", "type":"Panda"},
        {"name" : "Klaus", "type" : "Ours Blanc"},
        {"name" : "Richard", "type" : "Panda Roux"},
        {"name" : "Wilfried", "type" : "Grizzly"},
        {"name" : "Ursus", "type" : "Ours à Lunettes"}
    ]
 */

bearRouter.get('/all', async (req, res) =>{
    try {
        const bears = await Bear.find();
        res.json(bears);
    } catch (error) {
        res.json({message: 'Error fetching Bears', error});
    }
})
bearRouter.post('/new',async (req, res) =>{
    const newBear = new Bear(req.body);
    try {
        const saveBear= await newBear.save()
    } catch (error) {
        res.json({message:'Error in BEARing', error});
    }
    res.json({message:'New Bear Created \n', newBear});
})

bearRouter.get('/:id/show',async (req, res) =>{
    try {
        const bearToFind = await Bear.findOne({_id: req.params.id});
        res.json({message:'Found Bear : ', bear: bearToFind});
    } catch (error) {
        res.json({message:'Bear not found', error});
    }
})

bearRouter.put('/:id/edit',async (req, res) =>{
    try{
        const bearToUpdate = await Bear.findOneAndUpdate({_id: req.params.id }, req.body, 
        {
            new: true,
            runValidators: true,
        })
        res.json({ message : 'Bear is now Updated', bear: bearToUpdate } );
    } catch (error){
        res.json({ message : 'No Update to the Bear ', error } );
    }
})

bearRouter.delete('/:id/destroy',async (req, res) =>{
    try{
        const bearToDelete = await Bear.findOneAndDelete({_id: req.params.id }); 
        res.send('Ciao Bear' + bearToDelete);
    } catch (error){
        res.json({ message : 'Bear is still here ', error } );
    }
})

module.exports = bearRouter;