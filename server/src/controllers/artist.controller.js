const express = require('express');

const router = express.Router();

const Artist = require('../models/artist.model')

router.get('/',async(req,res)=>{
    try{
        const artist = await Artist.find().lean().exec();
        return res.status(200).send(artist);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const artist = await Artist.findById(req.params.id).lean().exec();
        return res.status(200).send(artist);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.post('/',async(req,res)=>{
    try{
        const user = await Artist.findOne({name: req.body.name}).lean().exec();
        if(user) return res.status(402).send("Try with another name");
        const artist = await Artist.create(req.body);
        return res.status(200).send(artist);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const artist = await Artist.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(artist);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})


module.exports = router;