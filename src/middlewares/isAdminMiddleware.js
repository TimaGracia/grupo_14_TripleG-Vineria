const User = require("../controllers/userController")

async function isAdminMiddleware (req, res, next){
    res.locals.isAdmin = false;
    let isAdmin = await User.isAdmin(req.session.userLogged);
    
    if(isAdmin == true){
        res.locals.isAdmin = true;
    } 
    else {
        res.locals.isAdmin= false;
    }
    next();
}

module.exports = isAdminMiddleware;