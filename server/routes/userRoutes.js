const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../models/userModel')
//updating the user
router.patch("/:id", async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    if(id!==userId){
        return res.json({err:"you are not allowed to update this user"});
    }
    if(req.body.password){
        req.body.password = await bcrypt.hash(req.body.password,12);
    }
    try{
        const user = await User.findByIdAndUpdate(id,{
            ...req.body
        });
        res.json({msg:"user updated!"});
    }catch(err){
        res.json({msg:err})
    }

})

//deleting an user
router.delete("/:id", async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    if(id!==userId){
        return res.json({err:"you are not allowed to update this user"});
    }
    try{
        const user = await User.findByIdAndDelete(id);
        res.json({msg:"user deleted!"});
    }catch(err){
        res.json({msg:err})
    }

})

//getting an User
router.get("/:id", async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    if(id!==userId){
        return res.json({err:"you are not allowed to update this user"});
    }
    try{
        const user = await User.findById(id);
        res.json({
            email:user.email,
            username:user.userName
        });
    }catch(err){
        res.json({msg:err})
    }

})
//Access friends
router.get("/friends/:userId",async (req,res)=>{
    const {userId} = req.params;
    try{
        const user = await User.findbyId(userId);
        const friends = await Promise.all(
            user.followings.map((friendId)=>{
                return User.findbyId(friendId)
            })
        )
        let friendlist = [];
        friends.map((frnd)=>{
            const {_id,userName,profilePicture} = frnd;
            friendlist.push( {_id,userName,profilePicture})
        })
        res.json(friendlist);
    }catch(err){
        res.json(err);
    }

})
//Follow a user
router.patch('/:id/follow',async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    if(id===userId){
        return res.json({
            msg:"you can't follow yourself"
        })
    }
    try{
        const user = await User.findbyId(userId);
        const followedPerson = await User.findbyId(id);
        if(followedPerson.followers.includes(userId)){
            return res.json({err:"you are already following this person"})
        }
        await followedPerson.updateOne({$push:{followers:userId}})
        await user.updateOne({$push:{followings:id}})
        res.json({msg:"user has been followed"});
    }catch(err){
        console.log(err);
    }
})

//unfollow an user
router.patch('/:id/unfollow',async(req,res)=>{
    const {id} = req.params;
    const {userId} = req.body;
    if(id===userId){
        return res.json({
            msg:"you can't unfollow yourself"
        })
    }
    try{
        const user = await User.findbyId(userId);
        const followedPerson = await User.findbyId(id);
        if(!followedPerson.followers.includes(userId)){
            return res.json({err:"you are not  following this person"})
        }
        await followedPerson.updateOne({$pull:{followers:userId}})
        await user.updateOne({$pull:{followings:id}})
        res.json({msg:"user has been unfollowed"});
    }catch(err){
        console.log(err);
    }
})
module.exports = router;