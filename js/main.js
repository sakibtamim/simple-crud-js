let input = document.querySelector("input");
let create = document.querySelector(".create_btn");
let update = document.querySelector(".update_btn");
let list = document.querySelector(".list");
let data = [];
let dataID;
let isEditing = false;

create.addEventListener("click", () => {
  data.push(input.value);
  input.value = "";
  isEditing = false;
  todo();
});

update.addEventListener("click", () => {
  data[dataID] = input.value;
  input.value = "";
  isEditing = false;
  todo();
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (isEditing) {
      update.click();
    } else {
      create.click();
    }
  }
});

function todo() {
  list.innerHTML = "";
  data.map((item) => {
    list.innerHTML += `<li>${item} <button class="edit">edit</button> <button class="delete">delete</button></li>`;
    let edit = document.querySelectorAll(".edit");
    let del = document.querySelectorAll(".delete");

    editArr = Array.from(edit);
    delArr = Array.from(del);

    delArr.map((ditem, index) => {
      ditem.addEventListener("click", () => {
        data.splice(index, 1);
        todo();
      });
    });

    editArr.map((eitem, id) => {
      eitem.addEventListener("click", () => {
        input.value = data[id];
        dataID = id;
        isEditing = true;
        todo();
      });
    });
  });
}
