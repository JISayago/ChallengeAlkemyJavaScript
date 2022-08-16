const express = require('express');
const app = express();
const sequelize = require('./database/db');

//Setting PORT
const PORT = process.env.PORT || 3001;

//Middleware para poder usar el post con req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', function (req, res) {
    res.json("hello wolf!")
});
app.use('/api/operations', require('./routes/operations'));




//RUN SERVER
app.listen(PORT, function () {
    console.log(`App Running on Port:${PORT}`);
    
    //Conection to Database
    sequelize.sync({ force: true }).then(() => {
        const as = new Date();
        console.log("Conection Status: Succcessfull!");
    }).catch(error => {
        console.log("Conection Status: Failed!",error);
    })
})