// Javascript program to calculate total cost of items based on unit price and quantity


let calc = (cart) => {
    let total=0;
    for (let i = 0; i < cart.length; i++) {
        total+=((cart[i].price) * (cart[i].quantity));
    }
    return total;
}
let cart= [{price:100,quantity:2},
    {price:200,quantity:5},
    {price:300,quantity:6},
    {price:400,quantity:9},];
console.log("Total cost of items is ",calc(cart));