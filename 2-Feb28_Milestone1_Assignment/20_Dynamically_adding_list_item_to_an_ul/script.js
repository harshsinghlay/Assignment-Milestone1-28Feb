let content = ["HTML and Semantics",
    "Starting with CSS",
    "Working Template",
    "Mobile responsive webpages",
    "Grid and Flex-box in CSS",
    "Projects using HTML & CSS",
    "Version Control and Git",
    "Getting Started with JavaScript",
    "Advance JavaScript",
    "Working with DOM",
    "Making Projects using HTML, CSS and JavaScript",
    "Understanding Fundamental of Computer Science",
    "Getting Started with Database",
    "Understanding the Database",
    "Starting with NodeJS and Express",
    "Understanding React and its Fundamentals",
    "Understanding Hooks and Routers",
    "Starting and Completing Full Fledge Projects"]

let list = document.getElementById("list");
let warn = document.getElementById("warning");
let index = 0;
let add = ()=>{
    if(index <= content.length-1){
    let li = document.createElement("li")
    li.innerHTML = "=>  " +content[index];
    li.type ="none";
    list.appendChild(li); 
    index++;
    }else{
warn.innerHTML = "All items have been added <br> No items left"
    }
}
    
let btn = document.getElementById("btn");
btn.addEventListener("click",add)