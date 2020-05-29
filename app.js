const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
require('dotenv/config');

const app = express();


// static path to public
app.use('/static', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 


// parse application/json
app.use(bodyParser.json());
// view engine embedded js
app.set('view engine', 'ejs');

// root route
app.get('/', (req,res)=>{
    res.render('pages/index');
    
});

// Database connect
mongoose.connect(process.env.db_connection_string,{useNewUrlParser:true,useUnifiedTopology: true,keepAlive: true})
	.then(()=>console.log(`\n Mongodb is connected `))
  .catch((error)=>console.log(error));
  
// User Schema
const userSchema = new mongoose.Schema({
	fname: {type:String,required:true},
	lname:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
});

const user = mongoose.model('userdata', userSchema);



// port handling
let port = process.env.PORT;
if(port== null || port==""){
  port = 3000;
}
app.listen(port, ()=>{
    console.log(`your are listening on port : ${port} \nPlease type "localhost:${port}" in your browser.`);

});