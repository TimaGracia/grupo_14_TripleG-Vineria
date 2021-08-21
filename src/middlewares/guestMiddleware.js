function guestMiddleware(req, res, next) {
    if (req.session.userLogged ==undefined) {
        next();
    } else {
        res.send("Esta página es visible unicamente para usuarios logueados");
    }

}

module.exports = guestMiddleware;