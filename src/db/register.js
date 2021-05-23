const mongoose=require('mongoose')
const validator=require('validator');

const userRegistration = new mongoose.Schema({
    userName:{
        type:String,
        trim:true
    },
    userEmail:{
        type:String,
        unique:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },
    userPassword:{
        type:String,
        required:true
    },
    belongs:{
        type:String,
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
const user=new mongoose.model('User',userRegistration)

module.exports= user;