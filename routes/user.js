const express = require('express')
const router = express.Router()
const User = require('./user-model')

router
    .get('/user', async (req, res) => {
        try{
            const users = await User.findAll();

            res.status(200).json({ cars });
        } catch(error){
            console.log(error)
        }
    })
    .post('/user', async (req, res) => {
        try {
            let {first_name, last_name, email, avatar} = req.body;
            let user = new User(first_name,last_name,email, avatar);

            user = await user.create();

            res.status(201).json({ success: "User Created!" })
        } catch (error) {
            console.log(error)
        }
    })

