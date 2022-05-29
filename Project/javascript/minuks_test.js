import fetch from "node-fetch";

function getAPI(){
    const url=`http://127.0.0.1:9999/store/restaurant_info`;
    fetch(url)
        .then(response=>{
            response.json();
        })
        .then(data=>{
            // const name=document.querySelector("#restaurant span:first-child");
            // const tele=document.querySelector("#restaurant span:last-child");
    
            // name.innerHTML=data[0].name;
            // tele.innerHTML=data[0].tele;
            // console.log(data);
            console.dir(data);
        });
}

getAPI();
