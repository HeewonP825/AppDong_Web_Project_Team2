const bodyParser = require('body-parser');
var express=require('express');
var fs=require('fs');
var mysql=require('mysql');
var path=require('path');
var url=require('url');
var querystring=require('querystring');
const { checkPrime } = require('crypto');

var app=express();
// 정적 파일 로드하기.
app.use(express.static(path.join(__dirname,'../javascript')));
app.use(express.static(path.join(__dirname,'../style/css')));
console.log(path.join(__dirname,'../javascript'));



app.use(bodyParser.urlencoded({
    extended:false
}));

app.listen(9999,function(){
    console.log('Server is running');
})


var client=mysql.createConnection({
    user:'root',
    password:'vcxz4941@'
});

client.query('USE asheley_db');



app.get('/',function(request,response){
    fs.readFile('../html/index.html','utf-8',function(error,data){
        if(error){
            console.log('Loading index.html is failed');
        }
        response.send(data);
    })
});


app.get('/delevery',function(request,response){
    fs.readFile('../html/delevery.html','utf-8',function(error,data){
        if(error){
            console.log('Loading delevery.html is failed');
        }
        response.send(data);
    })
});

// store get으로 받아오면 기본적인 방법으로 database set을 보내주면된다.
app.get('/store',function(request,response){
    fs.readFile('../html/delivery.html','utf-8',function(error,data){
        if(error){
            console.log('Loading delevery.html is failed');
        }
        response.send(data);
    })
});

//store페이지를 get으로 받아오면 조건에 맞게 database set을 보내준다.
app.get('/store/restaurant_info',function(request,response){
    const queryObj=request.query;
    if(queryObj===Object && Object.key(queryObj).length===0){
        client.query('SELECT * FROM RESTAURANT_INFO',function(error,result,fields){
            if(error){
                console.log('쿼리 문장에 오류가 있습니다.');
                return;
            }
            checkQueryParameter(queryObj);
        });
        console.log('정상 데이터 송신 완료');
    }else{
        console.log(request.query);
    }
});

function checkQueryParameter(queryObj){
    const valid_param=['restaurant_type','wine','beer','delivery','kids_room','name'];

    for(param in queryObj.key){
        
    }
}

app.get('/my-route', function(request, response, next) {

    response.sendFile(require('path').join(__dirname, '../html/minuk_test.html'), function(err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', "/minuk_test.html")
        }
    });
});







// app.get('/Project/html/minuk_test.html',function(request,response){
//     fs.readFile('../html/minuk_test.html','utf-8',function(error,data){
//         if(error){
//             console.log('Loading minuk_test.html is failed');
//         }
//         response.send(data);
//     })
// })