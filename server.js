const express = require('express');
const app = express();

app.get("/", (req, res)=> {

    res.send("Welcome to the Lorenzo Backend API!");

})
app.get('/micah', (req,res) => {res.send("Hello Micah")});

app.get('/andra', (req,res) => {res.send("Hello Andra!")});

app.get('/Moses', (req,res) => {res.send("Hello Moses!")});

app.listen(3000, ()=> {
    console.log("Listening");
})