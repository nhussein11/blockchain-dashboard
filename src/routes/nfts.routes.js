const {Router} = require('express');

const {
    getAllNfts,
    addNftFav,
    deleteNftFav
} = require('../controllers/nfts.controller')


const router = Router()

router
    .get('/:userId', getAllNfts)
    .post('/:userId/:nftId', addNftFav)
    .delete('/:userId/:nftId', deleteNftFav)

module.exports = router;