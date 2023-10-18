

let r ="red";
let b="blue";
let y= "yellow";
let color1="yellow";
let color2="blue";

switch (true) {
    case (color1==r && color2==b) || (color1==b && color2==r):
        console.log("Combination of ",color1,"and ",color2,"is purple");
        break;
    case (color1==r  && color2==y) || (color1==y  && color2==r)  :
        console.log("Combination of ",color1,"and ",color2,"is orange");
        break;
    case (color1==b && color2==y) || (color1==y && color2==b):
        console.log("Combination of ",color1,"and ",color2,"is green");
        break;
    default:
        console.log("Invalid Color Combination");
        break;
}