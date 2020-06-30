console.log("Hello");

const inputFieldElement = document.getElementById("inputField");
const listElement = document.getElementById("list");
const addButtonElement = document.getElementById("addButton");

addButtonElement.addEventListener("click", function () {
  const todoValue = inputFieldElement.value;

  const newListItem = document.createElement("li");
  newListItem.innerText = todoValue;

  listElement.appendChild(newListItem);

  inputFieldElement.value = "";

  inputFieldElement.focus();

  console.log(`To Do Item Added to List ${todoValue}`);
});

inputFieldElement.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    console.log("enter pressed");
    const todoValue = inputFieldElement.value;

    const newListItem = document.createElement("li");
    newListItem.innerText = todoValue;

    listElement.appendChild(newListItem);

    inputFieldElement.value = "";

    inputFieldElement.focus();

    console.log(`To Do Item Added to List ${todoValue}`);
  }
});
