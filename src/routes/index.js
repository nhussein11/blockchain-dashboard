const {Router, json} = require('express');

const router = Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.get('/', async (req,res)=>{
    const users = await User.find()
    res.send("Users:" , users)
});

router.post('/signup', async (req,res)=>{
    
    const {name, email, username, password} = req.body;
    const newUser = new User({name, email, username, password})
    await newUser.save()

    const token = jwt.sign({_id: newUser._id}, 'secretKey');

    res.status(200).json({token})
});

router.post('/signin', async (req,res)=>{
    
    
    const {username, password} = req.body;
    const user = await User.findOne({username})
    
    
    if(!user){
        res.status(401).send("Username doesn't exist!")
    }
    
    if(user.password !== password){
        res.status(401).send("Password invalid!")
    }

    const token = jwt.sign({_id: user._id}, 'secretKey');

    res.status(200).json({token})
});


router.post('/forgot-password', async (req,res)=>{
    
    const {email} = req.body;
    const user = await User.findOne({email})

    if(!user){
        res.status(401).send("Username doesn't exist!")
    }
    
    const {password} = user;
    res.status(200).json({'password':password})
});




router.get('/profile',verifyToken, async(req,res)=>{
    console.log(req.userId)
    const user = await User.findOne({})
    res.status(200).json({user})
})

module.exports = router;

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        res.status(401).send("Unauthorized request")
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token==='null') {res.status(401).send("Unauthorized request")}

    const payload = jwt.verify(token,'secretKey')
    req.userId = payload._id;

    next();
}