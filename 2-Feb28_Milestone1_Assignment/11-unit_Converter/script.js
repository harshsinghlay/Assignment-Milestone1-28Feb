// JavaScript program to convert celsius to  Fahrenheit
let c=60;
const converter=(celcius)=> {
    let farenhite=(celcius*(9/5))+32;
    return farenhite;
}
console.log(c,"degCelcius in Fahrenheit is ",converter(c));