const User = require('../models/User')
const { ObjectId } = require('mongodb')

const getAllCryptos = async (req, res) => {
    const { userId } = req.params;
    const { cryptosFavs } = await User.findOne({ _id: ObjectId(userId) }, { _id: 0, cryptosFavs: 1 }).select('cryptosFavs')

    if (!cryptosFavs) {
        return res.status(400).send({
            status: "Failed",
            message: "User doesn't exist."
        })
    }
    res.status(200).json({
        status: "Successfully",
        cryptosFavs
    })
}

const addCryptoFav = async (req, res) => {
    const { userId, cryptoId } = req.params;
    await User.updateOne (
        { _id: ObjectId(userId) },
        { $push: { cryptosFavs: cryptoId } }
    )
    res.status(201).json({
        status: "Crypto has successfully added to favs",
        cryptoId
    })
}

const deleteCryptoFav = async (req, res) => {
    const { userId, cryptoId } = req.params;
    
    await User.findByIdAndUpdate (
        { _id: ObjectId(userId) },
        { $pull: { cryptosFavs: cryptoId } }
    )

    res.status(200).json({
        status: "Crypto has successfully deleted from favs",
        cryptoId
    })
}

module.exports = {
    getAllCryptos,
    addCryptoFav,
    deleteCryptoFav
}