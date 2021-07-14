const express = require("express");
const app = express();
const path=require("path");

app.listen(2501,()=>console.log("Server Start","http://localhost:2501"));

app.use(express.static(path.join(__dirname,"../public")));//cambiar cuando agregue index.js a src

//app view
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"))

//app routes
//main
const main = require("./routes/main");
app.use(main);


//users (login y register)
const users = require("./routes/users")
app.use(users);


//Product
const products = require("./routes/products")
app.use(products);
