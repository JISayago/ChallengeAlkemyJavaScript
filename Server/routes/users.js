const express = require('express');
const router = express.Router();
const User = require('../database/models/User');
const Operation = require('../database/models/Operation');
const Category = require('../database/models/Category');


//Create /api/
router.get('/:id', async (req, res)=> {
    const users = await User.findOne({
        attributes: ['id','userName','email'],
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
    }).then()
    
    
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({
        attributes: ['id','userName','email'],
        where: {
            email: req.body.email,
            password: req.body.password
        }
        
    })
        .then(user => res.send(user));
    
})


module.exports = router;