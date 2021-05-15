const express = require('express');
const mongoose = require('mongoose')
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = 8000
const public = (path.join(__dirname, "../public"));
const templates = (path.join(__dirname, "../views/templates"));
const DB = `mongodb+srv://Nikhil:coder@07@cluster0.hp4rm.mongodb.net/userQuery?retryWrites=true&w=majority`
app.use(express.static(public));
app.set('view engine', 'hbs')
hbs.registerPartials(templates);

app.get('/about', (req, res) => {
    res.render("about")
})
app.get("/material", (req, res) => {
    res.render('material');
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("*", (req, res) => {
    res.render("error");
})
app.listen(port, () => {
    console.log('listening ....');
})

// database work
mongoose.connect(DB, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection');
    })
    .catch((err) => {
        console.log(err);
    })