require("dotenv").config();
const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const newToken = (user)=>{
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const signup = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email}).lean().exec()
    
        if(user) return res.status(500).send({message:"Please try another email"})
    
        user = await User.create(req.body)
    
        const token = newToken(user)
    
        return res.status(201).send({user,token})
    } catch(err){
        return res.status(501).send({Error: err.message})
    }
}

const login = async (req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email})

        if(!user) return res.status(500).send({message:"Please try another email or password"})

        const match = user.check(req.body.password)

        if(!match) return res.status(500).send({message:"Please try another email or password"})

        const token = newToken(user);

        res.status(202).cookie('token', token, {
            sameSite: 'strict',
            httpOnly: true,
        }).send({user,token})
    
        // return res.status(201).send({user,token})
    } catch(err){
        return res.status(501).send({Error:err.message})
    }
}

module.exports = {signup,login,newToken}