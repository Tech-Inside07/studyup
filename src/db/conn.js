require('dotenv').config();
const mongoose=require('mongoose');
const DB=`mongodb+srv://${process.env.DB_NAME}@cluster0.hp4rm.mongodb.net/userList?retryWrites=true&w=majority`;
mongoose.connect(DB,{useNewUrlParser:true,useFindAndModify:false,useUnifiedTopology:true,useCreateIndex:true})
.then(()=>{
    console.log('connected');
})
.catch((error)=>{
    console.log(error);
})
