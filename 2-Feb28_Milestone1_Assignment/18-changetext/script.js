// Js  file to change text of heading on each click using dom 
let head = document.getElementById("heading");
let btn =document.getElementById("btn");
const changeText=()=> {
    if(head.innerText=="PW Skills"){
        head.innerText="The Most Affordable Learning Platform";
    }else{
        head.innerText="PW Skills";
    }
}
btn.addEventListener("click",changeText);