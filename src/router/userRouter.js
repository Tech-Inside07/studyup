const express=require('express')
const router=new express.Router();
const user=require('../db/register');
const bcrypt=require('bcrypt');
saltRound=10

router.post('/register',async(req,res)=>{
    try {
        const password= await bcrypt.hash(req.body.myPassword,saltRound);
        const newUser=new user({
            userName:req.body.myName,
            userEmail:req.body.myEmail,
            userPassword:password,
            belongs:req.body.type
        })
        const result=await newUser.save();
        res.status(201).render('contact')
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;