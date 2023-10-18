let form = document.getElementById("form");
const validEmail=(email)=>{
    let r = email.includes("@") ? true : false;
    return r;
}
const validPassword=(password)=>{
    let r =  password.length>=8 ? true : false;
    return r;
}
form.addEventListener("submit",(e)=>{
 e.preventDefault();
 let para = document.getElementById("para");
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
 if(!validEmail(email) || !validPassword(password)){
    para.innerHTML="Incorrect email or password <br> The password should be 8 character long and email must contain @ symbol"
    para.className = "error";
 }else{
    para.innerHTML="Valid email and password"
    para.className ="success";
 }
})