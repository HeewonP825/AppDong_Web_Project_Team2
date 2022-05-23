var mysql=require('mysql');

var client=mysql.createConnection({
    user:'root',
    password:'vcxz4941@'
})

client.query('USE Company');
client.query('SELECT * FROM PRODUCTS',function(error,result,fields){
    if(error){
        console.log('syntax error');
    }else{
        console.log(result[0].name);
    }
});


