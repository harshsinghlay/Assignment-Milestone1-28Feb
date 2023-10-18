
const display=(c)=>{
    let result = document.getElementById("result");
    let yes = "# Password Validation Succesful #";
    let no =  "# Password Validation Unsuccessful #"
    if(c){
        console.log(yes);
        result.innerHTML =yes;
    }else{
        console.log(no);
        result.innerHTML = no;
    }    
}
const validator = ()=>{
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("cpassword").value;
    let c = pass==cpass ? true:false;
     display(c);
}

let btn = document.getElementById("btn");
btn.addEventListener("click",validator);