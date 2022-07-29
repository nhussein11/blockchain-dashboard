const {Router} = require('express');

const router = Router();
const User = require('../models/User')

router.get('/', (req,res)=>{
    console.log("hola")
    res.send("hello world")
});


router.post('/signup', async (req,res)=>{
    console.log(req.body)
    const {name, email, username, password} = req.body;
    const newUser = new User({name, email, username, password})
    await newUser.save()
    console.log(newUser)
    res.send('Saved user')
});

module.exports = router;