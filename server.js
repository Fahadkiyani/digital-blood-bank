const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// view engine embedded js
app.set('view engine', 'ejs');

// root route
app.get('/', (req,res)=>{
    res.send('<h2>The server is up and running!</h2>')
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`your are listening on port : ${port} \nPlease type 'localhost:3000' in your browser.`)
})