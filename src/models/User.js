const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});

module.exports(model('User',userSchema));