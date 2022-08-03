const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    
    name: String,
    email: String,
    username: String,
    password: String,
},  {timestamps:true}
);

module.exports = model('User',userSchema) ;