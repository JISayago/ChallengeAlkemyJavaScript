const express = require('express');
const app = express();
const sequelize = require('./database/db');
const Operation = require('./database/Models/Operation');

//Setting PORT
const PORT = process.env.PORT || 3001;

//Middleware para poder usar el post con req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', function (req, res) {
    Operation.create({
        amount: "1",
        concept: "",
        date: new Date(),
        tipeOf:"extraction",
    }).then(operation => {
        res.json(operation)
 })
});

//RUN SERVER
app.listen(PORT, function () {
    console.log(`App Running on Port:${PORT}`);
    
    //Conection to Database
    sequelize.sync({force:true}).then(() => {
        console.log("Conection Status: Succcessfull!");
    }).catch(error => {
        console.log("Conection Status: Failed!",error);
    })
})