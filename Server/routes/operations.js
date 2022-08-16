const express = require('express');
const router = express.Router();
const Operation = require('../database/models/Operation');

//Get Route
router.get('/',  (req, res)=> {
    res.send("operations routes")
});

//Create
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

//Read

//Update

//Delete

module.exports = router;