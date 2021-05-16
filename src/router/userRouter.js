const express=require('express')
const router=new express.Router();
const user=require('../db/register')

router.post('/register',async(req,res)=>{
    try {
        const newUser=new user({
            userName:req.body.myName,
            userEmail:req.body.myEmail,
            belongs:req.body.type
        })
        const result=await newUser.save();
        // res.status(201).send(result);
        res.render('contact')
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports=router;