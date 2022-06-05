/*
    위 문제는 백준 1000번 문제이다.
    https://www.acmicpc.net/status?user_id=alsdnrdl01&problem_id=1000&from_mine=1

    백준에서는 /dev/stdin에 테스트 데이터가 들어있기 때문에 /dev/stdin을 경로로해서 file을 읽어 데이터를 가져온다.
    데스크탑 환경에서는 dev/stdin 파일을 만들어놓고 거기에 데이터를 넣어놨다.
    다른 테스트 때문에 stdin에 다른 데이터가 들어있을 경우
    1 3 을 넣어 테스트한다.
*/
const fs=require('fs');

const inputData=fs.readFileSync('./dev/stdin').toString().split(' ').map(function(item){
    return Number(item);
});
console.log(inputData);
console.log(inputData[0]+inputData[1]);