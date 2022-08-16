const {Router} = require('express');

const {
    getAllExchanges,
    addExchangeFav,
    deleteExchangeFav
} = require('../controllers/exchanges.controller')


const router = Router()

router
    .get('/:userId', getAllExchanges)
    .post('/:userId/:exchangeId', addExchangeFav)
    .delete('/:userId/:exchangeId', deleteExchangeFav)

module.exports = router;