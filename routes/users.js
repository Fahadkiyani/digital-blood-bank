const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user= require('../models/userschema');


router.use(bodyParser.urlencoded({ extended: false }));

router.get('/',(req,res)=>{
    // console.log(req.query.valid);

    const username =(req.query.valid).toUpperCase();
    // const username =(req.query.valid).charAt(0).toUpperCase() + (req.query.valid).slice(1);
    
   let fname = username.substr(0,username.indexOf(' ')).toLowerCase();
   let fnameFinal = fname.charAt(0).toLowerCase() + fname.slice(1);

    res.render('../views/pages/newsignup', {nameUser:username,nameUserNav:fnameFinal});

})

router.get('/signup', ( req, res)=>{
    res.render('../views/pages/signup');
})

router.get('/login', ( req, res)=>{
    console.log(req.body);
    res.render('../views/pages/login');
})
router.post('/signup',(req,res)=>{
    const userSignup = new user({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        confirm_password:req.body.confirm_password
    })

      if (userSignup.fname && userSignup.lname && userSignup.email && userSignup.password) {
            userSignup.save().then(function(userSignup){
                console.log(userSignup)
            }).catch((error)=>console.log(error));

            let name = (userSignup.fname + " " + userSignup.lname).toString();
            var string = encodeURIComponent(name);
            res.redirect('/user?valid=' + string);


        } else {
           res.send('<h4>All fields are required, But some are left empty or entered wrong data.</h4><h2>Please re-enter the data correctly</h2> <a href=\"\/user\/signup\">Go To Signup Page</a>')
        }
     }
)

module.exports = router;