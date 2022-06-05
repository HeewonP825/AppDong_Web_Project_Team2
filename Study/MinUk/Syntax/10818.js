const fs=require('fs');

const inputDataArr=fs.readFileSync('./dev/stdin').toString().split('\n');
const element_count=Number(inputDataArr[0]);
const inputData=inputDataArr[1].split(' ').map(item=>Number(item));

const max=Math.max(...inputData);
const min=Math.min(...inputData);

console.log(min,max);