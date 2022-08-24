const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Operation = require('../database/models/Operation');
const Category = require('../database/models/Category');


//Create /api/
router.get('/', async (req, res)=> {
    const listOfUsers = await User.findAll({
        include: {
            model: Operation,
            as: "operations",
            attributes: [
                'amount',
                'concept',
                'typeOf'],
            include: [{
                model: Category,
                as: "category",
                attributes:['categoryName']
            }
            ]
            
        }, 

    });
    res.json(listOfUsers);
    
});



router.post('/', async (req, res) => {
    await User.create({
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
    }).then(user => {
        res.json(user);
    })
})
  
module.exports = router;