// importing express
const express=require('express');
//  setting a port number
const port=8000;
// importing ejs layout
const expressLayout=require('express-ejs-layouts');
// importing mongoose database 
const db=require('./config/mongoose');
// calling the web-framework
const app =express();
// to parse the body of the req
app.use(express.urlencoded());
// linking static files
app.use(express.static('./assets'));
// to use layouts
app.use(expressLayout);
// setting these to layout so that script and style file can move to head and bottom in layout.
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
//  to set view engine 
app.set('view engine','ejs');
app.set('views','./views');


app.use('/',require('./routes'));
// server is start listening
app.listen(port,function(err){
    if(err)
    {
        console.log("error in running port",err);
    }
    console.log("yup server is running",port);
})
