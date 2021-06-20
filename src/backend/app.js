// require('dotenv').config();
const express=require('express');
const app=express();
const hbs=require('hbs');
const port=process.env.PORT||8000
const path=require("path");

const staticPath=path.join(__dirname,"../../public");
const templatePath=path.join(__dirname,"../../views/templates");
require("../db/conn")
const dbRouter=require('../router/userRouter');


console.log(staticPath);
app.set("view engine","hbs")
hbs.registerPartials(templatePath)
app.use(express.static(staticPath))
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(dbRouter);


app.get("/",(req,res)=>{
    res.send('hellp')
})
app.get("/request-course",(req,res)=>{
    res.render('request-course')
})
app.get('/material',(req,res)=>{
    res.render("material");
})
app  .get('*',(req,res)=>{
    res.render("error")
})
app.listen(port,()=>{
    console.log(`listening to port no ${port}`);
})