const express = require('express');

const router = express.Router();

const Like = require('../models/like.model')

router.get('/',async(req,res)=>{
    try{
        const like = await Like.find().lean().exec();
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const like = await Like.findByIOne({user_id: req.params.id}).lean().exec();
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.post('/',async(req,res)=>{
    try{
        const user = await Like.findOne({name: req.body.id}).lean().exec();
        if(user) return res.status(402).send("Try with another name");
        const like = await Like.create(req.body);
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const like = await Like.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})


module.exports = router;