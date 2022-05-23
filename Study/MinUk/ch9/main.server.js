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
    extended:false
}));


app.listen(9999,function(){
    console.log('Server is running at local');
});

app.get('/',function(request,response){
    fs.readFile('list.html','utf8',function(error,data){
        client.query('SELECT * FROM PRODUCTS',function(error,result){
            response.send(ejs.render(data,{
                data:results
            }));
        });
    });
});

app.get('/delete/:id',function(request,response){

});

app.get('/insert',function(request,response){

});

app.post('/insert',function(request,response){

});

app.get('/edit/:id',function(request,response){

});

app.post('/edit/:id',function(request,response){

});
