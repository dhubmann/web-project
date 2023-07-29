const newBoxBtn = document
  .getElementById("new-box-btn")
  .addEventListener("click", function () {
    addNewBox();
  });

function addNewBox() {
  let box = document.createElement("div");
  box.className = "box";
  document.getElementById("container").appendChild(box);

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn rm-box-btn";
  let minus = document.createElement("span");
  minus.className = "minus";
  minus.textContent = "-";
  deleteButton.appendChild(minus);
  box.appendChild(deleteButton);

  /* TODO: add link of box*/
}
