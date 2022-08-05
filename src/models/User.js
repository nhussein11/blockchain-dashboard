const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    username: {
        type:String,
        unique: true
    },
    password: {
        type: String,
        required:true
    },
}, { timestamps: true }
);

module.exports = model('User', userSchema);