const removeDuplicate = ( cart)=>{
    return Array.from(new Set(cart));
}

const cart = ["item1","item2","item3","item4","item1","item1"]
console.log(cart);
const newCart = removeDuplicate(cart);
console.log(newCart);