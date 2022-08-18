const express = require('express');
const router = express.Router();
const Category = require('../database/models/Category');


router.post('/', async (req, res) => {
    await Category.create({
        categoryName: req.body.categoryName,
    }).then(category => {
        res.json(category);
    })
})
  
module.exports = router;