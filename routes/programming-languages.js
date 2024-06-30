const express = require('express')
const router = express.Router()

const ProgLang = require('./prog-lang-model')

router.get(`/`, async (req,res) => {
    try{
        const lang = await ProgLang.findAll();
        
        res.status(200).json({ lang });
    } catch (error) {
        console.log(error)
    }
})
module.exports = router