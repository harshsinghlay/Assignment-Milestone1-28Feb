// Javascript program to calculate discount

let percentage= (price,discount) => (discount/price)*100;

let p = (percentage(66,3)).toFixed(2);
console.log("The discount percentage is "+p+"%");