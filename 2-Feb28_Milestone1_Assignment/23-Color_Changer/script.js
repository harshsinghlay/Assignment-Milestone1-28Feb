let btn = document.getElementById("btn");
let info = document.getElementById("info")
btn.addEventListener("click",()=>{
    console.log("I am running");
    let hex = "123456789abcdef";    
    let i=0;
    let hexcolor = "#";     
    while (i<6) {
       let random = Math.floor(Math.random()*(hex.length-1))+1
       hexcolor += hex[random];
       i++;
    }
    document.body.style.background = hexcolor
    info.innerHTML= `HexColor : ${hexcolor}`
})
