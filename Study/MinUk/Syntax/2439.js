const fs=require('fs');

const inputData=Number(fs.readFileSync('./dev/stdin').toString().trim());

for(let i=1; i<=inputData; i++){
    let start_count=i;
    for(j=inputData-i;j>0;j--){
        process.stdout.write(' ');
    }
    for(;start_count>0;start_count--){
        process.stdout.write('*');
    }
    console.log();
}