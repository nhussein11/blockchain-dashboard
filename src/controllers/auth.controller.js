const User = require('../models/User')
const {jwtUtility, createJWT} =  require('../utilities/jwt')
const { ObjectId } = require('mongodb')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).send({ "users": users })
}

const signUp = async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        
        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).send({
                status: "Failed",
                message: "Username already exists."
            })
        }
        const newUser = new User({ name, email, username, password })
        
        const salt = bcrypt.genSaltSync();
        newUser.password = bcrypt.hashSync(password, salt);

        await newUser.save();

        const token = await createJWT(newUser._id, newUser.name);
        
        res.status(201).send({ 
            status: "successfully",
            message: "Username already exists.",
            token
        })

    } catch (error) {
        return res.status(400).send({
            status: "Failed",
            message: "Something went wrong...",
            error: error.message
        })
    }


}

const signIn = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) {
        res.status(401).send("Username doesn't exist!")
    }
    if (user.password !== password) {
        res.status(401).send("Password invalid!")
    }
    const token = jwt.sign({ _id: user._id }, 'secretKey');
    res.status(200).json({ token, id: user._id })
}

const forgotPassword = async (req, res) => {

    const { email } = req.body;
    const user = await User.findOne({ email })

    if (!user) {
        res.status(401).send("Username doesn't exist!")
    }

    const { password } = user;
    res.status(200).json({ 'password': password })
}

const getProfile = async (req, res) => {
    const id = req.userId;
    const user = await User.findOne({ _id: ObjectId(id) })
    res.status(200).json({ user })
}

const updateProfile = async (req, res) => {
    const update = req.body;
    const filter = { _id: (req.userId) }
    const userToUpdate = await User.findOneAndUpdate(filter, update, { new: true })
    res.status(200).json({ userToUpdate })
}




module.exports = {
    getAllUsers,
    signUp,
    signIn,
    forgotPassword,
    getProfile,
    updateProfile
}