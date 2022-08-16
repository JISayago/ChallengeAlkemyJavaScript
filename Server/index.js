const express = require('express');
const app = express();
const sequelize = require('./database/db');


//Setting PORT
const PORT = process.env.PORT || 3001;


// ROUTES
app.get('/', function (req, res) {
    res.send('Hello Worlf!');
})

//RUN SERVER
app.listen(PORT, function () {
    console.log(`App Running on Port:${PORT}`);
    
    //Conection to Database
    sequelize.authenticate().then(() => {
        console.log("Conection Status: Succcessfull!");
    }).catch(error => {
        console.log("Conection Status: Failed!",error);
    })
})