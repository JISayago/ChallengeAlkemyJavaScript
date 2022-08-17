const express = require('express');
const app = express();
const sequelize = require('./database/db');

//Setting PORT
const PORT = process.env.PORT || 3001;

//Middleware to use with req.body(POST/put)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.get('/', function (req, res) {
    res.json("hello wolf!")
});

//ApiRoutes
app.use('/api/operations', require('./routes/operations'));


//RUN SERVER
app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`);
    
    //Conection to Database
    sequelize.sync({ force: false }).then(() => {
        console.log("Conection Status: Succcessfull!");
    }).catch(error => {
        console.log("Conection Status: Failed!",error);
    })
})