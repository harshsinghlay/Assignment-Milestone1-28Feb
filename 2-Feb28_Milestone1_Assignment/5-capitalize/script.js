
const check = (userName) => {
  let newName =
    userName.slice(0, 1).toUpperCase() == userName.slice(0, 1)
      ? userName
      : userName.slice(0, 1).toUpperCase() + userName.slice(1);
  return newName;
};
let userName = "harsh";
userName = check(userName);
console.log("Name is " + userName);
