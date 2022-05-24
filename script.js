let addTask = document.querySelector("#addToDo");
let uls = document.querySelector("ul");
let lis = document.querySelectorAll("li");
let trashes = document.querySelectorAll("span");

addTask.addEventListener("change", function () {
  addTask.value
    ? (uls.innerHTML += `<li><span><i class="fa fa-trash"></i></span>${addTask.value}</li>`)
    : "";
  addTask.value = "";
  trashes = document.querySelectorAll("span");
  lis = document.querySelectorAll("li");
  console.log(lis);
  console.log(trashes);
  return trashes;
});

trashes.forEach((valueTrash, indexTrash) => {
  console.log("HA HEHCO EL FOREACH");
  valueTrash.addEventListener("click", function () {
    lis.forEach((valueLis, indexLis) => {
      if (indexTrash === indexLis) {
        console.log("entra en el if");
        valueLis.remove();

        lis = document.querySelectorAll("li");
        trashes = document.querySelectorAll("span");
        console.log(trashes);
        console.log(lis);
      }
    });
  });
});
