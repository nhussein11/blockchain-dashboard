const User = require('../models/User')
const { ObjectId } = require('mongodb')

const getAllExchanges = async (req, res) => {
    const { userId } = req.params;
    const { exchangesFavs } = await User.findOne({ _id: ObjectId(userId) }, { _id: 0, exchangesFavs: 1 }).select('exchangesFavs')

    if (!exchangesFavs) {
        return res.status(400).send({
            status: "Failed",
            message: "User doesn't exist."
        })
    }
    res.status(200).json({
        status: "Successfully",
        exchangesFavs
    })
}

const addExchangeFav = async (req, res) => {
    const { userId, exchangeId } = req.params;
    
    await User.updateOne (
        { _id: ObjectId(userId) },
        { $push: { exchangesFavs: exchangeId } }
    )
    res.status(201).json({
        status: "Exchange has successfully added to favs",
        exchangeId
    })
}

const deleteExchangeFav = async (req, res) => {
    const { userId, exchangeId } = req.params;
    
    await User.findByIdAndUpdate (
        { _id: ObjectId(userId) },
        { $pull: { exchangesFavs: exchangeId } }
    )

    res.status(200).json({
        status: "Nft has successfully deleted from favs",
        exchangeId
    })
}

module.exports = {
    getAllExchanges,
    addExchangeFav,
    deleteExchangeFav
}