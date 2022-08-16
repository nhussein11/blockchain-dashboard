const {Router} = require('express');

const {
    getAllCryptos,
    addCryptoFav,
    deleteCryptoFav
} = require('../controllers/cryptos.controller')


const router = Router()

router
    .get('/:userId', getAllCryptos)
    .post('/:userId/:cryptoId', addCryptoFav)
    .delete('/:userId/:cryptoId', deleteCryptoFav)

module.exports = router;