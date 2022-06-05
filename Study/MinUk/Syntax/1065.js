const fs=require('fs');

const inputData=fs.readFileSync('./dev/stdin').toString().trim();
//const inputData="1000";

const number_arr=inputData.split('').map(item=>Number(item));
//console.log(number_arr);
let count=0;


if(Number(inputData)<100){
    count=Number(inputData);
}else{
    count=99;
}

for(let i=1; i<10; i++){
    let number=[i,0,0];
    for(let d=-4; d<5;d++){
        number[1]=i+d;
        number[2]=number[1]+d;
        if(number[2]>10){
            break;
        }else if(number[2]<0){
            continue;
        }
        let numberInt=+number.join("");
        if(numberInt>inputData){{
            break;
        }}
        //console.log(numberInt);
        count++;
    }
}

console.log(count);