const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/userModel')
const mongoose = require('mongoose');
//signup

router.post('/register',async(req,res)=>{

    const {username,email,password} = req.body;

    if(!username||!email||!password){
        return res.json('fill out all fields');
    }
    try{
        const hashedPassword = await bcrypt.hash(password,12);
        const user = await User.create({
            userName:username,
            email:email,
            password:hashedPassword,
        })
        res.send(user);


    }catch(err){
        console.log(err);
    }

    
})

//signin

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        res.json({
            msg:"Fill out all the fields"
        });
    }
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.json({msg:"register first"});
        }
        const result = await bcrypt.compare(password,user.password)
        if(!result){
            return res.json({msg:"password mismatch"});
        }
        res.json(user)

    }catch(err){
        return res.json({err:"Invalid credentials!"})
    }

})



module.exports = router;