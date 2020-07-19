const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
require('dotenv/config');

const app = express();

// Middleware's
// static path to public
app.use('/static', express.static(path.join(__dirname, 'public')));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// router routes middleware
const usersRoutes = require('./routes/users')
app.use("/user", usersRoutes);
// parse application/json
app.use(bodyParser.json());
// view engine embedded js
app.set('view engine', 'ejs');

// http request Endpoints
app.get('/', (req,res)=>{
    res.render('pages/index');
    // res.status(404).end()
});
app.post('/datalist',(req,res)=>{
  console.log(req.body.bloodType);
})
app.get('/video',(req,res,next)=>{
  res.send('<h1 style="font-family: \'Roboto\', sans-serif; "> Video cannot be accessed, please try again.</h1><a href="/">try again!</a>');
next();
})

// Database connect
// mongoose.connect(process.env.db_connection_string,{useNewUrlParser:true,useUnifiedTopology: true,keepAlive: true})
// 	.then(()=>console.log(`\n Mongodb is connected `))
//   .catch((error)=>console.log(error));
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology: true,keepAlive: true})
	.then(()=>console.log(`\n Mongodb is connected `))
  .catch((error)=>console.log(error));
mongoose.Promise = global.Promise;

// port handling
let port = process.env.PORT;
if(port== null || port==""){
  port = 3000;
}
app.listen(port,process.env.IP, ()=>{
    console.log(`your are listening on port : ${port} \nPlease type "localhost:${port}" in your browser.`);

});