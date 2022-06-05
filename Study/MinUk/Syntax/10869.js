/*
    https://www.acmicpc.net/problem/10869
*/

const fs=require('fs');

const inputData=fs.readFileSync('./dev/stdin').toString().split(' ').map(item=>Number(item));

console.log(inputData[0]+inputData[1]);
console.log(inputData[0]-inputData[1]);
console.log(inputData[0]*inputData[1]);
console.log(parseInt(inputData[0]/inputData[1]));
console.log(inputData[0]%inputData[1]);

