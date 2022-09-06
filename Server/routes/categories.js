const express = require('express');
const router = express.Router();
const Category = require('../database/models/Category');
const Operation = require('../database/models/Operation');

router.get('/', async (req, res)=> {
    const listOfCategories = await Category.findAll();
   res.json(listOfCategories);
});

router.post('/', async (req, res) => {
    console.log(req.body)
    await Category.create({
        categoryName: req.body.categoryName,
    }).then(category => {
        res.json(category);
    })
   })
  
module.exports = router;