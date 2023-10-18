// Javascript program to split bill

let dishCost = [200, 400, 100, 1300];
let people = 5;
function billCalculator(dishCost, people) {
  let obj = {};
  obj.total = dishCost.reduce((a,b)=>{
    return a+b;
  })
  obj.splittedBill = obj.total / people;
  return obj;
}
let bill = billCalculator(dishCost, people);
console.log("Total bill is " + bill.total+"rs");
console.log("We are "+people+" People , So Each person has to pay " + bill.splittedBill+"rs");
