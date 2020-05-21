const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
require('dotenv/config');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// Database connect
mongoose.connect(process.env.db_connection_string,{useNewUrlParser:true},()=>console.log("DB is connected!"))

// parse application/json
app.use(bodyParser.json())
// view engine embedded js
app.set('view engine', 'ejs');

// root route
app.get('/', (req,res)=>{
    res.send('')
});



const port = 3000;
app.listen(port, ()=>{
    console.log(`your are listening on port : ${port} \nPlease type "localhost:3000" in your browser.`)
})