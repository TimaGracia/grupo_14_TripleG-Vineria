const User = require("../controllers/userController")

async function isAdminMiddleware (req, res, next){
    res.locals.isAdmin = false;
    let isAdmin = await User.isAdmin(req.session.userLogged);
    //console.log("Antes del IF "+isAdmin)
    if(isAdmin == true){
        //console.log("desde el middleware"+isAdmin)
        res.locals.isAdmin = true;
        
    } 
    else {
        res.locals.isAdmin= false;
       
    }
    next();



}

module.exports = isAdminMiddleware;