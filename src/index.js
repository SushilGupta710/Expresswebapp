//importing modules
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
var port = process.env.PORT || 8000;

//public static path
const staticPath=path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")
app.use(express.static(staticPath));

// setting handle bars
app.set("view engine","hbs")
// Changing path view to templates
app.set("views",templatePath)
// registering partials
hbs.registerPartials(partialPath)

//routing
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log(`server is listining on port no.${port} running on server http://localhost:${port}`);
})