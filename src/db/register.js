const mongoose=require('mongoose');
const validator=require('validator');

const userRegistration=new mongoose.Schema({
    userName:{
        type:String,
        trim:true,
        require:true
    },
    userGmail:{
        type:String,
        require:true,
        unique:false,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    userCourse:{
        type:String,
        trim:true
    },
    userMessage:{
        type:String,
        trim:true
    }
});

const user=new mongoose.model('User',userRegistration);
module.exports=user;