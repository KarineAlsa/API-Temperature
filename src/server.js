const express =require ("express");
const cors =require("cors");
const app=express();
const mysql = require("mysql2");
var routes = require('./routes/routes.js');


app.use(cors());
require('dotenv').config()

const PORT=process.env.PORT

app.use(express.json());
app.use(routes);
app.listen(PORT, ()=>
    console.log("API iniciada en puerto: " + PORT)
)
