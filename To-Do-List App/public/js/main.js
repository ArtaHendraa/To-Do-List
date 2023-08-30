const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("Kamu Harus Menulis Sesuatu");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveListData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("check");
      saveListData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveListData();
    }
  },
  false
);

function saveListData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function displayDataList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayDataList();
