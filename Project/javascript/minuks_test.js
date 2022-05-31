import fetch from "node-fetch";

function getAPI(){
    const url=`http://127.0.0.1:9999/store/restaurant_info`;
    fetch(url)
        .then(response=>{
            console.log(response);
            response.json();
        })
        .then(data=>{
            console.log(data[0]);
        });
}

getAPI();

// event listener page load -> getAPI라는 함수를 실행시켜라

// window.addEventListener('load',function(){
//     console.log('load event가 감지되었습니다.')
//     const url=`http://127.0.0.1:9999/store/restaurant_info`;
//     fetch(url)
//         .then(response=>{
//             console.log(response);
//             response.json();
//         })
//         .then(data=>{
//             console.log(data);
//         });
// });

