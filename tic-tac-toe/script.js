const box0 = document.querySelector("#box-0");
const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box4 = document.querySelector("#box-4");
const box5 = document.querySelector("#box-5");
const box6 = document.querySelector("#box-6");
const box7 = document.querySelector("#box-7");
const box8 = document.querySelector("#box-8");

const newGameBtn = document.querySelector(".newGameBtn");
const header = document.querySelector(".header");
const winner = document.querySelector("#winner");

const heading = document.querySelector("#heading");

let clickNo = 0;

function decideWinner() {
  //     row 0
  if (
    box0.innerHTML === "X" &&
    box1.innerHTML === "X" &&
    box2.innerHTML === "X"
  )
    return "X";
  if (
    box0.innerHTML === "O" &&
    box1.innerHTML === "O" &&
    box2.innerHTML === "O"
  )
    return "0";

  //     row 1
  if (
    box3.innerHTML === "X" &&
    box4.innerHTML === "X" &&
    box5.innerHTML === "X"
  )
    return "X";
  if (
    box3.innerHTML === "O" &&
    box4.innerHTML === "O" &&
    box5.innerHTML === "O"
  )
    return "0";

  //     row 2
  if (
    box6.innerHTML === "X" &&
    box7.innerHTML === "X" &&
    box8.innerHTML === "X"
  )
    return "X";
  if (
    box6.innerHTML === "O" &&
    box7.innerHTML === "O" &&
    box8.innerHTML === "O"
  )
    return "0";

  // col 0
  if (
    box0.innerHTML === "X" &&
    box3.innerHTML === "X" &&
    box6.innerHTML === "X"
  )
    return "X";
  if (
    box0.innerHTML === "O" &&
    box3.innerHTML === "O" &&
    box6.innerHTML === "O"
  )
    return "0";

  //     col1
  if (
    box1.innerHTML === "X" &&
    box4.innerHTML === "X" &&
    box7.innerHTML === "X"
  )
    return "X";
  if (
    box1.innerHTML === "O" &&
    box4.innerHTML === "O" &&
    box7.innerHTML === "O"
  )
    return "0";

  //     col2
  if (
    box2.innerHTML === "X" &&
    box5.innerHTML === "X" &&
    box8.innerHTML === "X"
  )
    return "X";
  if (
    box2.innerHTML === "O" &&
    box5.innerHTML === "O" &&
    box8.innerHTML === "O"
  )
    return "0";

  //  diag 0
  if (
    box0.innerHTML === "X" &&
    box4.innerHTML === "X" &&
    box8.innerHTML === "X"
  )
    return "X";
  if (
    box0.innerHTML === "O" &&
    box4.innerHTML === "O" &&
    box8.innerHTML === "O"
  )
    return "0";

  // diag 1
  if (
    box6.innerHTML === "X" &&
    box4.innerHTML === "X" &&
    box2.innerHTML === "X"
  )
    return "X";
  if (
    box6.innerHTML === "O" &&
    box4.innerHTML === "O" &&
    box2.innerHTML === "O"
  )
    return "0";

  if (clickNo === 9) return "draw";

  return "inprogress";
}

newGameBtn.addEventListener("click", () => {
  clickNo = 0;
  header.style.display = "none";
  heading.innerHTML = "";

  box0.innerHTML = "";
  box1.innerHTML = "";
  box2.innerHTML = "";
  box3.innerHTML = "";
  box4.innerHTML = "";
  box5.innerHTML = "";
  box6.innerHTML = "";
  box7.innerHTML = "";
  box8.innerHTML = "";
});

function registerInput(box) {
  if (box.innerHTML === "" && heading.innerHTML === "") {
    if (clickNo % 2 == 0) {
      box.innerHTML = "X";
    } else {
      box.innerHTML = "O";
    }
    clickNo++;
  }

  const res = decideWinner();

  if (res === "0" || res === "X") {
    header.style.display = "flex";
    heading.innerHTML = `The winner is ${res}`;
  }

  if (res === "draw") {
    header.style.display = "flex";
    heading.innerHTML = `The game ends in draw`;
  }
  console.log(res);
}

box0.addEventListener("click", () => registerInput(box0));
box1.addEventListener("click", () => registerInput(box1));
box2.addEventListener("click", () => registerInput(box2));
box3.addEventListener("click", () => registerInput(box3));
box4.addEventListener("click", () => registerInput(box4));
box5.addEventListener("click", () => registerInput(box5));
box6.addEventListener("click", () => registerInput(box6));
box7.addEventListener("click", () => registerInput(box7));
box8.addEventListener("click", () => registerInput(box8));
