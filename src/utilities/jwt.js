const jwt = require('jsonwebtoken')

const createJWT = (uid, name) => {
    const payload = { uid, name };

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            process.env.SECRET_JWT_SEED,
            {
                // algorithm:'RS256',
                expiresIn: '10s',
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject(err)
                }
                resolve(token)
            }
        )
    })
}

module.exports = {
    createJWT
}