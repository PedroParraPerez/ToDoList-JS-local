let uls = document.querySelector("ul");
let addTask = document.querySelector("#addToDo");

addTask.onchange = function () {
  if (addTask.value.trim().length != 0) {
    uls.innerHTML += `<li><span class="delete"><i class="fa fa-trash"></i></span>${addTask.value}</li>`; //add new task
    addTask.value = "";
    deleteTask();
  } else alert("añade una tarea");
};
//add logic to trash button
const deleteTask = () => {
  let trashes = document.querySelectorAll(".delete");
  for (let i = 0; i < trashes.length; i++) {
    trashes[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
deleteTask();
