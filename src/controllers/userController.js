const path = require("path");

let userController = {
    register: function(req, res){
        res.render("register", {style:"register", title: "Register"})
    },
    login: function(req, res){
        res.render("login", {style:"login", title: "Login"})
    }

}

module.exports = userController;
