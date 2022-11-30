const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + "/views");
app.set('view engine', 'pug');

app.get("/",async (req,res) => {
    res.render("home");
})

app.get("/101riddles", async (req,res) => {
    res.sendFile(path.join(__dirname,"/101Riddles/index.html"));
})

app.get("/phasetrivia", async (req,res) => {
    res.sendFile(path.join(__dirname,"/phasetrivia/index.html"));
})

app.get("/bidwars", async (req,res) => {
    res.sendFile(path.join(__dirname,"/bidwars/index.html"))
})

app.get("/pof", async (req,res) => {
    res.sendFile(path.join(__dirname,"/pofv3/index.html"))
})
//const RouteControl = require('./controllers/RouteControl');
app.use(require('body-parser')());


app.listen(process.env.PORT || 4333,() => {
    console.log("We live");
})
