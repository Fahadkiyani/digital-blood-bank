const express = require('express');
const router = express.Router();

router.get('/signup', ( req, res)=>{
    res.render('../views/pages/signup');
})

module.exports = router;