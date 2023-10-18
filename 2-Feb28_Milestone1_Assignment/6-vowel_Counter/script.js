
let vowels=["a" ,"A","e" ,"E","i" ,"I","o" ,"O","u","U"];
let names="Harsh Singhlay";
let count=0;
for(let element of names){
    if(vowels.includes(element)){
        count++;
    }
}
console.log("There are ",count," Vowels in Your Name");