const newBoxBtn = document
  .getElementById("new-box-btn")
  .addEventListener("click", function () {
    addNewBox();
  });

function addNewBox() {
  var box = document.createElement("div");
  box.className = "box";
  document.getElementById("container").appendChild(box);
  console.log("new box element");
}
