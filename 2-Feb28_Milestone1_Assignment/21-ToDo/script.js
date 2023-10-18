let count = 0;
let addtodo = (e) => {
  e.preventDefault();
  let task = document.getElementById("task").value;
  let taskList = document.getElementById("taskList");
  let warn = document.getElementById("warning");
  if (task == "") {
    warn.innerHTML = "# Invalid Input #";
  } else {
    count++;
    warn.innerHTML = "";
    let listItem = document.createElement("li");
    listItem.innerHTML = `${count}. ${task}`;
    listItem.className = "item";
    taskList.appendChild(listItem);
    form.reset();
  }
};
let removetodo = () => {
  let taskList = document.getElementById("taskList");
  let warn = document.getElementById("warning");
  if (taskList.hasChildNodes()) {
    let e = taskList.lastElementChild;
    taskList.removeChild(e);
    count--;
  } else {
    warn.innerHTML = "# Nothing to Remove #";
  }
};
let resettodo = () => {
  let warn = document.getElementById("warning");
  let taskList = document.getElementById("taskList");
  warn.innerHTML = "";
  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastElementChild);
  }
};
let addBtn = document.getElementById("submit");
addBtn.addEventListener("click", addtodo);
let removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", removetodo);
let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", resettodo);
