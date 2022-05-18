const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',async(req,res)=>{
    try{
        return res.status().send('Welcome to Spotify');
    } catch(e){
        return res.status.send({Error:e.message});
    }
})

const PORT = 8080;

app.listen(PORT,async()=>{
    try{
        console.log("hello")
    } catch(err){
        console.log("something went wrong");
    }
})