const fs=require('fs');

const inputData=Number(fs.readFileSync('./dev/stdin').toString().trim());


if(inputData>=90 & inputData<=100){
    console.log('A');
}else if(inputData>=80 & inputData<=89){
    console.log('B');
}else if(inputData>=70 & inputData<=79){
    console.log('C');
}else if(inputData>=60 & inputData<=69){
    console.log('D');
}else{
    console.log('F')
}
