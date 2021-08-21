const fs = require('fs');

module.exports = function (req, res, next) {

    fs.appendFileSync("log.txt", "Se ingresó en la url" + req.url +"\n");
    next();


}