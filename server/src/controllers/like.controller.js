const express = require('express');

const router = express.Router();

const Like = require('../models/like.model')
const authenticate = require('../middlewares/authenticate')

router.get('/',async(req,res)=>{
    try{
        const like = await Like.find().lean().exec();
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.get('/:id',authenticate,async(req,res)=>{
    try{
        const like = await Like.findOne({user_id: req.params.id}).populate([{path:'audio_ids', populate:{path:'artist'}}]).lean().exec();
        return res.status(200).send(like);
    } catch(err){
        return res.status(401).send({Error:err.message});
    }
})

router.post('',authenticate,async(req,res)=>{
    try{
        const user = await Like.findOne({user_id: req.query.user}).lean().exec();
        let like;
        if(!user){
            like = await Like.create({
                user_id: req.query.user,
                audio_ids: [req.query.audio]
            })
            return res.status(200).send(like);
        }
        let updateDocument;
        if(!user.audio_ids.find(ele=>ele==req.query.audio)){
            updateDocument = {$push: { audio_ids: req.query.audio }}
            like = await Like.findOneAndUpdate({user_idme: req.query.user},updateDocument,{
                new:true
            });
            return res.status(200).send(like);
        }
        return res.status(200).send("You already liked this song");
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