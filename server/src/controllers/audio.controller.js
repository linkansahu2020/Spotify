const express = require('express');

const router = express.Router();

const Audio = require('../models/audio.model')

router.get('/',async(req,res)=>{
    try{
        const audio = await Audio.find().populate('artist').lean().exec();
        return res.status(200).send(audio);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const audio = await Audio.findById(req.params.id).lean().exec();
        return res.status(200).send(audio);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.post('/',async(req,res)=>{
    try{
        const audio = await Audio.create(req.body);
        return res.status(200).send(audio);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const audio = await Audio.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send(audio);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const audio = await Audio.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(audio);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})


module.exports = router;