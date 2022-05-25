const bodyParser = require('body-parser');
var express=require('express');
var fs=require('fs');

var app=express();

app.use(bodyParser.urlencoded({
    extended:false
}));

app.listen(9999,function(){
    console.log('Server is running');
})

app.get('/',function(request,response){
    fs.readFile('./html/index.html','utf-8',function(error,data){
        if(error){
            console.log('Loading index.html is failed');
        }
        response.send(data);
    })
});


app.get('/delevery',function(request,response){
    fs.readFile('./html/delivery.html','utf-8',function(error,data){
        if(error){
            console.log('Loading delevery.html is failed');
        }
        response.send(data);
    })
});

// store get으로 받아오면 기본적인 방법으로 database set을 보내주면된다.
app.get('/store',function(request,response){
    fs.readFile('./html/delivery.html','utf-8',function(error,data){
        if(error){
            console.log('Loading delevery.html is failed');
        }
        response.send(data);
    })
});

// store페이지를 post로 받아오면 조건에 맞게 database set을 보내준다.
app.post('/store',function(request,response){
    fs.readFile('./html/delivery.html','utf-8',function(error,data){
        if(error){
            console.log('Loading delevery.html is failed');
        }
        response.send(data);
    })
});


