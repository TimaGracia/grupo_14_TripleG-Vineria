function authMiddleware (req, res, next) {
    if (req.session.userLogged != undefined) {
        next();
    } else {
        res.send("Usted puede ser esta página");
    }

}

module.exports = authMiddleware;