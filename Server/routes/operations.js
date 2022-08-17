const express = require('express');
const router = express.Router();
const Operation = require('../database/models/Operation');

//Get Route
router.get('/',  (req, res)=> {
    res.send("operations routes")
});

//Create /api/operations
router.post('/', (req, res) => {
    Operation.create({
        amount: req.body.amount,
        concept: req.body.concept,
        date: req.body.date,
        typeof:req.body.typeof,        
    }).then(operation => {
        res.json(operation);
    })
})
  
//Read  /api/operations/:id
router.get('/:id', (req, res) => {
    Operation.findByPk(req.params.id).then(operation => {
        res.json(operation);
    })
})

//Update
router.put('/:id', (req, res) => {
    Operation.update({
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

//Delete
router.delete('/:id', (req, res) => {
    Operation.destroy({
        where: {
            id:req.params.id
        }
    }).then(result => {
        res.json("This operation was deleted")
    })
})
module.exports = router;