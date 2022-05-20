const express = require('express');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const connect = require('../db/db');
const { login, signup } = require('./controllers/auth.controller');

const app = express();

const UserController = require('./controllers/user.controller') 

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/users',UserController)

app.post('/login', login);
app.post('/signup', signup);

app.get('',async(req,res)=>{
    try{
        return res.status(200).send('Welcome to Spotify');
    } catch(e){
        return res.status(404).send({Error:e.message});
    }
})

const PORT = 8080;

app.listen(PORT,async()=>{
    try{
        await connect();
        console.log("My port no is 8080")
    } catch(err){
        console.log("something went wrong");
    }
})