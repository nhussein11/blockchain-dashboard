const jwt = require('jsonwebtoken')

const verifyToken= (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).send("Unauthorized request")
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null') { res.status(401).send("Unauthorized request") }

    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED)
    
    req.userId = payload.uid;

    next();
}

module.exports = {
    verifyToken 
}