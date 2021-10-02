const path = require("path");
//const userModel = require("../models/userModel");
const db = require("../database/models")
const userUtil = require("./userUtil")
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
    processLogin: async function(req, res){
        let errors = validationResult(req);
       
        if (errors.isEmpty()){
            let users = await userUtil.all();//userModel.all();
            //console.log(users);
            for (let i = 0; i < users.length; i++){
                if (users[i].email == req.body.email){
                   
                    
                    if (bcrypt.compareSync(req.body.password, users[i].password)){
                        
                        var userLogged = users[i];
                        delete userLogged.password;
                        req.session.userLogged = userLogged;

                        if(req.body.remember_user){
                            res.cookie("userEmail", req.body.email, {maxAge: (1000*60) * 20});
                        }

                        break;
                    }
                }
            }
        console.log("User Logged:" +userLogged);
        if (userLogged == undefined){
            return res.render("login", {style:"login", title: "Login",errors: [
                {msg: "Credenciales invalidas"}
            ]})

        } 
        res.redirect("/");
        
        } else {
           // res.send(errors.mapped());
            return res.render("login", {style:"login", title: "Login",errors:errors.mapped()})
        }

    },
    getById: async function(req, res){
        let user = await db.User.findByPk(req.params.id);
        
        res.render("users/user", {user:user, style:"productDetail", title: "Detalle del Usuario"})//userModel.getById(req.params.id)
    },
   /* all: async function(){

        let all = await db.User.findAll();
        return all;

    },
    create: async function(data, file){
        let all = this.all();
        let img;

        if (file){
            img = "/uploads/users/"+file.filename;
        } else img = "/uploads/users/default.png";

        try {
            let newElement = await db.User.create({
                name: data.nombreCompleto,
                email: data.email,
                password: bcrypt.hashSync(data.contrasenia, 10),
                admin: false,
                avatar: img
            });
            
        } catch (error) {
            console.log(error);
            
        }
 
    },*/
    store: async function(req, res){
        let errors = validationResult(req);

        
        let userInDB = await db.User.findOne(
            { where: 
                { email: req.body.email } });//userModel.findByField("email", req.body.email);
        

        if (userInDB) {
            
            return res.render("register", {style:"register", title: "Register", errors:{
                email: {
                    msg: "El usuario ya existe"
                }
            }, old:req.body});
        }
        
        if (errors.isEmpty()){
            let saved = userUtil.create(req.body,req.file); //userModel.create(req.body,req.file);
            //res.send(saved);
            return saved ? res.redirect("/") : res.status(500).send("Error en el servidor");
        } else {
            
            res.render("register", {style:"register", title: "Register", errors:errors.mapped(), old:req.body});//errors:errors.array()
            
        }

        

    }, 

    profile: function(req, res){
        return res.send(req.session.userLogged);
    }, 
    logout: function(req, res){
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    }


}

module.exports = userController;
