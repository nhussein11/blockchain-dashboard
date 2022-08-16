const User = require('../models/User')
const { ObjectId } = require('mongodb')

const getAllNfts = async (req, res) => {
    const { userId } = req.params;
    const { nftsFavs } = await User.findOne({ _id: ObjectId(userId) }, { _id: 0, nftsFavs: 1 }).select('nftsFavs')

    if (!nftsFavs) {
        return res.status(400).send({
            status: "Failed",
            message: "User doesn't exist."
        })
    }
    res.status(200).json({
        status: "Successfully",
        nftsFavs
    })
}

const addNftFav = async (req, res) => {
    const { userId, nftId } = req.params;
    
    await User.updateOne (
        { _id: ObjectId(userId) },
        { $push: { nftsFavs: nftId } }
    )
    res.status(201).json({
        status: "Nft has successfully added to favs",
        nftId
    })
}

const deleteNftFav = async (req, res) => {
    const { userId, nftId } = req.params;
    
    await User.findByIdAndUpdate (
        { _id: ObjectId(userId) },
        { $pull: { nftsFavs: nftId } }
    )

    res.status(200).json({
        status: "Nft has successfully deleted from favs",
        nftId
    })
}

module.exports = {
    getAllNfts,
    addNftFav,
    deleteNftFav
}