const express = require('express');
const Category = require('../database/models/Category');
const router = express.Router();
const Operation = require('../database/models/Operation');
const User = require('../database/models/User');

//Get Route
router.get('/:userId', async (req, res) => {
    const listOfOperations = await Operation.findAll({
        where: {
            userId: req.params.userId,
        },
        attributes: ['id','amount','concept','date','typeOf'],
        include: [{
            model: Category,
            attributes: ['categoryName'],
        }, {
            model: User,
            attributes:['userName'],
        }] 
    })
    .then(listOfOperations => res.send(listOfOperations));
});

//Create /api/operations
router.post('/', async (req, res) => {
        await Operation.create({
        amount: req.body.amount,
        concept: req.body.concept,
        date: req.body.date,
        typeOf: req.body.typeOf, 
        userId:req.body.userId,
        categoryId:req.body.categoryId,
    }).then(operation => res.send(operation));
    })

  
//Read  /api/operations/:id
router.get('/:id',  async (req, res) => {
    await Operation.findByPk(req.params.id).then(operation => {
        res.json(operation);
    })
})

//Update /api/operations/:id
router.put('/:id', async (req, res) => {
    await Operation.update({
        amount: req.body.amount,
        concept: req.body.concept,
        date: req.body.date,
        typeof:req.body.typeof,        
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
})

//Delete /api/operations/:id
router.delete('/:id', async (req, res) => {
    await Operation.destroy({
        where: {
            id:req.params.id
        }
    }).then(result => {
        res.json("This operation was deleted")
    })
})
module.exports = router;