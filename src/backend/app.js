const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const port=process.env.PORT||8000;
require('../db/conn');
const dbRouter=require('../router/userRouter')

const staticPath=path.join(__dirname,('../../public'));
const templatePath=path.join(__dirname,('../../views/templates'))

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(dbRouter);
app.set('view engine','hbs')
hbs.registerPartials(templatePath)

app.get('/',(req,res)=>{
    res.send('some error occur');
})
app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/register',(req,res)=>{
    res.render("register")
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/material',(req,res)=>{
    res.render("material")
})
app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log(`listening at port no ${port}`);
})