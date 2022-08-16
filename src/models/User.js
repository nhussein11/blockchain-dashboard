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
    cryptosFavs:{
        type: [String]
    },
    nftsFavs:{
        type: [String]
    },
    exchangesFavs:{
        type: [String]
    }
}, { timestamps: true }
);

module.exports = model('User', userSchema);