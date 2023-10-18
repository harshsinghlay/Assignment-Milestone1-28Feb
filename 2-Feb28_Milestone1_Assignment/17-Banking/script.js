// JavaScript program to impliment function that update user account balance

const createUser = (n, b) => {
  return obj = {
    name: n,
    balance: b,
    deposit: function (amount) {
    let oldBalance = this.balance;
    this.balance = oldBalance+amount;
    },
    withdrawl: function(amount){
      if(amount>this.balance){
        console.log("Insufficient account balance");
      }else{
      let oldBalance = this.balance;
      this.balance = oldBalance - amount;
      }
    },
  };
};

let user1 = createUser("harsh", 100);
let user2 = createUser("aman", 200);

// Deposit 100rs in harsh account
user1.deposit(500);
console.log(user1.name);
console.log(user1.balance);

// Withdrawl 100rs in aman account
user2.withdrawl(50);
console.log(user2.name);
console.log(user2.balance);
