

let num1=20;
let num2=30;
let operator ="-";
let result ;
switch (operator) {
    
    case "+":
        result=num1+num2;
        break;
    case "-":
        result=num1-num2;
        break;
    case "*":
        result=num1*num2;
        break;
    case "/":
        result=num1/num2;
        break;
    default:
        console.log("Invalid Operator");
        break;
}
console.log(num1+" "+operator+" "+num2+" is "+ result);