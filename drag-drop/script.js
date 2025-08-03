let lists = document.getElementsByClassName("list");
let leftBox = document.querySelector(".left");
let rightBox = document.querySelector(".right");

for (currList of lists) {
  currList.addEventListener("dragstart", (e) => {
    let selected = e.target;

    rightBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightBox.addEventListener("drop", () => {
      rightBox.appendChild(selected);
      selected = null;
    });

    leftBox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    leftBox.addEventListener("drop", () => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
