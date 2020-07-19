const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const user= require('../models/userschema');
// const userInfo= require('../models/steptwo');
const bcrypt = require('bcrypt');
const saltRounds = 6;

router.use(bodyParser.urlencoded({ extended: false }));

// router.get('/',(req,res)=>{
    
//     const username =(req.query.valid).toUpperCase();
//     // const username =(req.query.valid).charAt(0).toUpperCase() + (req.query.valid).slice(1);
    
//    let fname = username.substr(0,username.indexOf(' ')).toLowerCase();
//    let fnameFinal = fname.charAt(0).toLowerCase() + fname.slice(1);

//     res.render('../views/pages/newsignup', {nameUser:username,nameUserNav:fnameFinal});

// })

router.get('/signup', ( req, res)=>{
    res.render('../views/pages/signup',{emailValidation:'', signupTitle:'Signup Form | OBB'});
})

router.get('/login', ( req, res)=>{
    // console.log(req.body);
    res.render('../views/pages/login',{loginTitle:'Login | OBB'});
})


// User signup route Handling, validating and saving data to db.
router.post('/signup',(req,res,next)=>{
    user.findOne({email:req.body.email},function(err,data){
        if (err) throw err;
        // if null means the new user can signup
        if (data == null){
            const userSignup = new user({
                fname:req.body.fname,
                lname:req.body.lname,
                email:req.body.email,
                password:req.body.password,
                blood_type:req.body.bloodType,
                last_donnated:req.body.last_donnated,
                faddress:req.body.faddr,
                saddress:req.body.laddr,
                city:req.body.city,
                country:req.body.country,
                contact:req.body.contact
            });
    
            if (userSignup.fname && userSignup.lname && userSignup.email && userSignup.password) {
                bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                    userSignup.password=hash;
                    userSignup.save().then(function(userSignup){
                        console.log(userSignup)
                    }).catch((error)=>console.log(error));
                });
                } else {
                   res.send('<h4>All fields are required, But some are left empty or entered wrong data.</h4><h2>Please re-enter the data correctly</h2> <a href=\"\/user\/signup\">Go To Signup Page</a>')
                }
    
            next()
           
        }
        else{//else means user is already in db with req.body.email
            let errResponse= `A user already exist with this email  '${req.body.email}'  , Try new one!`;
            res.render('../views/pages/signup',{emailValidation:errResponse})
          }
         })
        
    },(req,res)=>{

        res.render('../views/pages/signupsuccess');

        // let name = (userSignup.fname + " " + userSignup.lname).toString();
        //             var string = encodeURIComponent(name);
        //             res.redirect('/user?valid=' + stsring);
        // let headName = (req.body.fname + req.body.lname).toString().toUpperCase();
        // res.render('../views/pages/newsignup',{nameUser:headName,nameUserNav:req.body.fname})
    }
)
// router.post("/step-two", (req, res)=>{
    
//     const userinfo = new userInfo({
        
//     })
//     userinfo.save().then(function(userinfo){
//         console.log(userinfo)
//     }).catch((error)=>console.log(error));
// })

module.exports = router;