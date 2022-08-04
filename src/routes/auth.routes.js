const { Router } = require('express');
const { getAllUsers, 
        signUp, 
        signIn, 
        forgotPassword, 
        getProfile, 
        updateProfile } = require('../controllers/auth.controller')

const {verifyToken} = require('../middlewares/auth.middlewares')

const router = Router();

router
    .get('/', getAllUsers)
    .post('/signup', signUp)
    .post('/signin', signIn)
    .post('/forgot-password', forgotPassword)
    .get('/profile/:id', verifyToken, getProfile)
    .patch('/profile/:id', verifyToken, updateProfile)

module.exports = router;

