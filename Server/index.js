const express = require('express');
const app = express();
const sequelize = require('./database/db');
const cors = require('cors');
require('./database/models/Asociations');
//Setting PORT
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.get('/', function (req, res) {
    res.json("hello wolf!")
});
app.use('/api/accountHandler', require('./routes/users'));//here select log-in or sign-in
app.use('/api/operations', require('./routes/operations'));
app.use('/api/categories', require('./routes/categories'));



//RUN SERVER
app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`);
    
    //Conection to Database
    sequelize.sync({ force: false }).then(() => {
        const d = new Date();
        console.log("Conection Status: Succcessfull!", d);
    }).catch(error => {
        console.log("Conection Status: Failed!",error);
    })
})