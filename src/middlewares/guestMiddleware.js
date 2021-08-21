function guestMiddleware(req, res, next) {
    console.log(req.session);
    if (req.session.userLogged == undefined) {
        next();
    } else {
        //res.send("Usted está logueado");
        res.redirect("/");
    }

}

module.exports = guestMiddleware;