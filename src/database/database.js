const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database is connected')
    }
    catch (err) {
        console.log(err);
        throw new Error
    }
}

module.exports = {
    dbConnection
}