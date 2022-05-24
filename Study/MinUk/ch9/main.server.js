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
    fs.readFile('./list.html','utf8',function(error,data){
        client.query('SELECT * FROM PRODUCTS',function(error,results){
            response.send(ejs.render(data,{
                data:results
            }));

            console.log(results);
        });
    });
});

app.get('/delete/:id',function(request,response){
    console.dir(request);
    client.query('DELETE FROM PRODUCTS WHERE id=?',[request.params.id],function(){
        response.redirect('/');
    })
});

app.get('/insert',function(request,response){
    fs.readFile('insert.html','utf-8',function(error,data){
        response.send(data);
    });
});

app.post('/insert',function(request,response){
    // console.dir(request.body);
    var body=request.body;

    client.query('INSERT INTO PRODUCTS (name,modelnumber,series) VALUES(?,?,?)',[body.name,body.modelnumber,body.series],function(){
        response.redirect('/');
    })
});

// app.get('/edit/:id',function(request,response){

// });

// app.post('/edit/:id',function(request,response){

// });
