const express=require('express')
const router=new express.Router();
const user=require('../db/register');

router.post("/request-course",async(req,res)=>{
    try {
            const newUser=new user({
                userName:req.body.name,
                userGmail:req.body.gmail,
                userCourse:req.body.course,
                userMessage:req.body.message
            })

            const result= await newUser.save();
            res.status(201).render('request-course');
        
    } catch (error) {
        console.log(error);
    }
})


module.exports=router;

