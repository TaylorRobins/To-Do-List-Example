console.log("Hello");

const inputFieldElement = document.getElementById("inputField");
const listElement = document.getElementById("list");
const addButtonElement = document.getElementById("addButton");

addButtonElement.addEventListener("click", function () {
  addItemToList();
});

inputFieldElement.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addItemToList();
  }
});

function addItemToList() {
  console.log("enter pressed");
  const todoValue = inputFieldElement.value;

  const newListItemElement = document.createElement("li");
  newListItemElement.innerText = todoValue;
  newListItemElement.classList.add("item");
  newListItemElement.addEventListener("click", function (e) {
    const currentListElement = e.target;
    currentListElement.classList.add("complete");
  });

  listElement.appendChild(newListItemElement);

  inputFieldElement.value = "";

  inputFieldElement.focus();

  console.log(`To Do Item Added to List ${todoValue}`);
}
