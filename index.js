const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser')
// var jsonParser = bodyParser.json()

const app = express();
const port = 8000;


// use express router
app.use('/',require('./routes'));
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error im running the server :${err}`);
    }
    console.log(`Server is running at port : ${port}`);
});