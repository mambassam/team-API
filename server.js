const express = require('express');
const app = express();

app.get("/", (req, res)=> {

    res.send("Welcome to the Lorenzo Backend API!");

})
app.get('/micah', (req,res) => {res.send("Hello Micah")});

app.listen(3000, ()=> {
    console.log("Listening");
})