const path = require("path");
const userModel = require("../models/userModel");
const {validationResult} = require("express-validator");
const { resolveNaptr } = require("dns");
const bcrypt = require('bcryptjs');

let userController = {
   /* all: function(req, res){
        return userModel.all();
    },*/
    register: function(req, res){
        res.render("register", {style:"register", title: "Register"})
    },
    login: function(req, res){
        res.render("login", {style:"login", title: "Login"})
    }, 
    processLogin: function(req, res){
        let errors = validationResult(req);
       
        if (errors.isEmpty()){
            let users = userModel.all();
            //console.log(users);
            for (let i = 0; i < users.length; i++){
                //console.log("Este es el mail del array: "+users[i].email)
                //console.log("Este es el mail del req body: "+req.body.email)
                if (users[i].email == req.body.email){
                    //console.log("ENTROOOOOOO");
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                    //if (users[i].password == req.body.password) {//cambiar por bcrypt.
                        //bcrypt
                        /*
                        if (bcrypt.compareSync(req.body.password, users[i].password)){
                        */

                        //console.log("Esta es la password del array: "+users[i].password)
                        //console.log("Esta es la password del req body: "+req.body.password)
                        var userLogged = users[i];
                        break;

                    }
                }
            }
        if (userLogged == undefined){
            return res.render("login", {style:"login", title: "Login",errors: [
                {msg: "Credenciales invalidas"}
            ]})

        }
        //console.log(userLogged);
        req.session.userLogged = userLogged;
        res.send("Success!")
        
        } else {
           // res.send(errors.mapped());
            return res.render("login", {style:"login", title: "Login",errors:errors.mapped()})
        }

    },
    getById: function(req, res){
        
        res.render("users/user", {user:userModel.getById(req.params.id), style:"productDetail", title: "Detalle del Usuario"})
    },
    store: function(req, res){
        let errors = validationResult(req);

        //res.send(errors.mapped());
        
        if (errors.isEmpty()){
            let saved = userModel.create(req.body,req.file);
            //res.send(saved);
            return saved ? res.redirect("users/user/"+saved.id) : res.status(500).send("Error en el servidor");
        } else {
            //console.log(req.body)
            res.render("register", {style:"register", title: "Register", errors:errors.mapped(), old:req.body});//errors:errors.array()
            //En vez de array podemos usar errors.mapped()
        }

    }

}

module.exports = userController;
