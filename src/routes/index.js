const {Router, json} = require('express');

const router = Router();
const User = require('../models/User')
const jwt = require('jsonwebtoken')

router.get('/', (req,res)=>{
    console.log("hola")
    res.send("hello world")
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


module.exports = router;