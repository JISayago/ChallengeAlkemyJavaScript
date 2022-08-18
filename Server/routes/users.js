const express = require('express');
const router = express.Router();
const User = require('../database/models/User');


//Create /api/
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