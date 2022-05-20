const express = require('express');

const router = express.Router();

const User = require('../models/user.model')

router.get('/',async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(user);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})


module.exports = router;