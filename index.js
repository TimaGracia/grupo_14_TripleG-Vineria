const express = require("express");
const app = express();
const path=require("path");

app.listen(2500,()=>console.log("Server Start","http://localhost:2500"));

app.use(express.static(path.join(__dirname,"./public")));

const home = require("./src/routes/home");
app.use(home);
const login = require("./src/routes/login");
app.use(login);
const productDetail = require("./src/routes/productDetail");
app.use(productDetail);
const register = require("./src/routes/register");
app.use(register);
const productCart = require("./src/routes/productCart");
app.use(productCart);