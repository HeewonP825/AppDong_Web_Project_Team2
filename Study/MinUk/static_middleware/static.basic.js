var express=require('express');
var path=require('path');

var app=express();

app.use(express.static(path.join(__dirname,'../public')));


app.use(function(request,response){
    response.writeHead(200,{
        'Content-type':'text/html'
    });
    response.end('<img src="/error.jpg" width="100%"/>');
})

app.listen(55555,function(){
    'Server is running at local'
});