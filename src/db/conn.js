
const mongoose=require('mongoose');
const DB="mongodb+srv://Nikhil:coder@07@cluster0.hp4rm.mongodb.net/userList?retryWrites=true&w=majority";

mongoose.connect(DB,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('connection successfull');
})
.catch((err)=>{
    console.log(err);
})
