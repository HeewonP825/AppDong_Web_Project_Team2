const fs=require('fs');

const inputData=fs.readFileSync('./dev/stdin').toString().split('');

// console.log(inputData);

// console.log(String.fromCharCode(122));
for(let i=97; i<=122;i++){
    let alphabet=String.fromCharCode(i);
    let key=false;
    // console.log(alphabet);
    for(let j=0; j<inputData.length;j++){
        if(inputData[j]==alphabet){
            process.stdout.write(j+" ");
            key=true;
            break;
        }
    }
    if(i==122 & key==false){
        process.stdout.write("-1");
        break;    
    }else if(key==false){
        process.stdout.write("-1 ");
    }

}