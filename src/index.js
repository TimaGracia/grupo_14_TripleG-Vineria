const express = require("express");
const app = express();
const path=require("path");
const methodOverride = require('method-override');

app.listen(2501,()=>console.log("Server Start","http://localhost:2501"));

app.use(express.static(path.join(__dirname,"../public")));

//uso JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app view
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"))

app.use(methodOverride("_method"));

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
