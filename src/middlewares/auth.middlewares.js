const jwt = require('jsonwebtoken')

const verifyToken= (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send("Unauthorized request")
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') { res.status(401).send("Unauthorized request") }

    const payload = jwt.verify(token, 'secretKey')
    req.userId = payload._id;

    next();
}

module.exports = {
    verifyToken 
}