var fs=require('fs');
var ejs=require('ejs');
var mysql=require('mysql');
var express=require('express');
var bodyParser=require('body-parser');

var client=mysql.createConnection({
    user:'root',
    password:'vcxz4941@',
    database:'Company'
});

var app=express();
app.use(bodyParser.urlencoded({
    extended:false;
}));


app.listen(9999,function(){
    console.log('Server is running at local');
});

app.get('/',funtion(request,response){

});

app.get('/delete/:id',funtion(request,response){

});

app.get('/insert',funtion(request,response){

});

app.post('/insert',funtion(request,response){

});

app.get('/edit/:id',funtion(request,response){

});

app.post('/edit/:id',funtion(request,response){

});
