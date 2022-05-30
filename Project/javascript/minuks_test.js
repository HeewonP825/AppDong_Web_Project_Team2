import fetch from "node-fetch";

function getAPI(){
    const url=`http://127.0.0.1:9999/store/restaurant_info`;
    fetch(url)
        .then(response=>{
            console.log(response);
            response.json();
        })
        .then(data=>{
            console.log(data);
        });
}

getAPI();
