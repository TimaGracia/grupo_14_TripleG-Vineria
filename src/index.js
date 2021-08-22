const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');
const logMiddleware = require("./middlewares/logMiddleware");
const session = require('express-session');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const cookies = require('cookie-parser');

app.listen(2502,()=>console.log("Server Start","http://localhost:2502"));

app.use(express.static(path.join(__dirname,"../public")));

app.use(logMiddleware);



app.use(session({
    secret:"vineria", 
    resave: false, 
    saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

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


app.use((req, res, next) => {
    res.status(400).render("not-found");
})