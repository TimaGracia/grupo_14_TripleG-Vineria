function authMiddleware (req, res, next) {
    
    if (req.session.userLogged != undefined) {
        next();
    } else {
        //res.send("Debe estar logueado para ver esta pagina");
        res.redirect("/login");
    }

}

module.exports = authMiddleware;