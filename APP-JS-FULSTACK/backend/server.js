const express = require('express');

const connectDB = require('./config/db');
const dotenv = require('dotenv').config()  //connection avec les variable .env

const app =  express();
const port = 500;

/* connexion a  la DB */
connectDB();


/*Middleware qui traite les donnée de la req POST*******/

app.use(express.json()) //pour que le post comprend les fichier json
app.use(express.urlencoded({ extended : false }))//pour que le post comprend URL

app.use("/post", require("./routes/post.routes"));

app.listen(port, ()=>{
    console.log(`Le Server Demare Sur Le PORT ${port}`)
}); 

