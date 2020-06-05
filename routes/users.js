const express = require('express');
const router = express.Router();

router.get('/signup', ( req, res)=>{
    res.render('../views/pages/signup');
})

router.get('/login', ( req, res)=>{
    res.render('../views/pages/login');
})
module.exports = router;