// Javascript program to calculate rental cost 
// Rental Costs are - 
//  economy = 4000/day;
//  midsize = 10000/day;
//  luxury = 20000/day;

let economy=4000
let midsize=10000
let luxury=20000;
let days =10;
function rentalCost(type,days){
    let cost;
     switch (type) {
        case economy:
            cost = economy * days;
            break;
        case midsize:
            cost = midsize * days;
            break;
        case luxury:
            cost = luxury * days;
            break;
        default:
            console.log("Invalid Input");
            break;
     }
     return cost;
}
console.log("The rental cost of economy for "+days+" days is ",rentalCost(economy,days));
console.log("The rental cost of midsize for "+days+" days is ",rentalCost(midsize,days));
console.log("The rental cost of luxury for "+days+" days is ",rentalCost(luxury,days));