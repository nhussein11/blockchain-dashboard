const User = require('../models/User')
const {  createJWT } = require('../utilities/jwt')
const { ObjectId } = require('mongodb')
const bcrypt = require('bcryptjs')

const getAllUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).send({ "users": users })
}

const signUp = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const existingUser = await User.findOne({ username });
        if (existingUser) {
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

        return res
            .cookie("SESSIONID", token, { httpOnly: true, secure: true })
            .status(201)
            .send({
                status: "Successfully",
                message: "User has been created successfully.",
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
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(401).send({
                status: "Failed",
                message: "Username doesn't exist!"
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(401).send({
                status: "Failed",
                message: "Password invalid!"
            })
        }

        const token = await createJWT(user._id, user.name);

        return res
            .cookie("SESSIONID", token, { httpOnly: true, secure: true })
            .status(200)
            .json({
                status: "Successfully",
                token,
                id: user._id
            })

    } catch (error) {
        return res.status(400).send({
            status: "Failed",
            message: "Something went wrong...",
            error: error.message
        })
    }
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
    if (!user) {
        return res.status(400).send({
            status: "Failed",
            message: "Username doesn't exist."
        })
    }
    res.status(200).json({
        status: "Successfully",
        user
    })
}

const updateProfile = async (req, res) => {
    const { name, email, username, password } = req.body;

    const salt = bcrypt.genSaltSync();
    passwordHashed = bcrypt.hashSync(password, salt);

    const userUpdated = { name, email, username, passwordHashed }

    const filter = { _id: (req.userId) }
    const userToUpdate = await User.findOneAndUpdate(filter, userUpdated, { new: true })
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