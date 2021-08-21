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
            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                    
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
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
        delete userLogged.password;
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
        let userInDB = userModel.findByField("email", req.body.email);
        //res.send(userInDB);

        if (userInDB) {
            
            return res.render("register", {style:"register", title: "Register", errors:{
                email: {
                    msg: "El usuario ya existe"
                }
            }, old:req.body});
        }
        
        if (errors.isEmpty()){
            let saved = userModel.create(req.body,req.file);
            //res.send(saved);
            return saved ? res.redirect("users/user/"+saved.id) : res.status(500).send("Error en el servidor");
        } else {
            //console.log(req.body)
            res.render("register", {style:"register", title: "Register", errors:errors.mapped(), old:req.body});//errors:errors.array()
            //En vez de array podemos usar errors.mapped()
        }

        

    }, 

    profile: function(req, res){
        return res.send(req.session.userLogged);
    }, 
    logout: function(req, res){
        req.session.destroy();
        return res.redirect("/");
    }


}

module.exports = userController;
