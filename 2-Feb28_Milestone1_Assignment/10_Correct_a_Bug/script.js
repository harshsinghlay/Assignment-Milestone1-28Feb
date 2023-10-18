
let doubleCart = (arr)=>{
    return arr.map((e)=>{
        return e*2;
    })
}

let cart = [1,2,3,4,5,6,7,8,9];
let newCart = doubleCart(cart);
console.log(newCart);