let matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0 is empty, 1 is o, 2 is x

let h2 = document.querySelector("h2");

function endGame() {
  // no moves left, game over
  one.removeEventListener("click", _one);
  two.removeEventListener("click", _two);
  three.removeEventListener("click", _three);
  four.removeEventListener("click", _four);
  five.removeEventListener("click", _five);
  six.removeEventListener("click", _six);
  seven.removeEventListener("click", _seven);
  eight.removeEventListener("click", _eight);
  nine.removeEventListener("click", _nine);
}

function winCondition(matrix) {
  // checks if game is won every move
  if (
    (matrix[0] === 1 && matrix[1] === 1 && matrix[2] === 1) ||
    (matrix[3] === 1 && matrix[4] === 1 && matrix[5] === 1) ||
    (matrix[6] === 1 && matrix[7] === 1 && matrix[8] === 1) ||
    (matrix[0] === 1 && matrix[4] === 1 && matrix[8] === 1) ||
    (matrix[2] === 1 && matrix[4] === 1 && matrix[6] === 1) ||
    (matrix[0] === 1 && matrix[3] === 1 && matrix[6] === 1) ||
    (matrix[1] === 1 && matrix[4] === 1 && matrix[7] === 1) ||
    (matrix[2] === 1 && matrix[5] === 1 && matrix[8] === 1)
  ) {
    h2.innerHTML = "O You Win!";
    endGame();
    return;
  } else if (
    (matrix[0] === 2 && matrix[1] === 2 && matrix[2] === 2) ||
    (matrix[3] === 2 && matrix[4] === 2 && matrix[5] === 2) ||
    (matrix[6] === 2 && matrix[7] === 2 && matrix[8] === 2) ||
    (matrix[0] === 2 && matrix[4] === 2 && matrix[8] === 2) ||
    (matrix[2] === 2 && matrix[4] === 2 && matrix[6] === 2) ||
    (matrix[0] === 2 && matrix[3] === 2 && matrix[6] === 2) ||
    (matrix[1] === 2 && matrix[4] === 2 && matrix[7] === 2) ||
    (matrix[2] === 2 && matrix[5] === 2 && matrix[8] === 2)
  ) {
    h2.innerHTML = "X You Win!";
    endGame();
    return;
  }

  if (matrix.every((value) => value !== 0)) {
    h2.innerHTML = "Draw!";
    endGame();
    return;
  }
}

let turns = 0; //determine whether x or o is going

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

function _one() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    one.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[0] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    one.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[0] = 2;
  }
  one.removeEventListener("click", _one);
  winCondition(matrix);
}
one.addEventListener("click", _one);

function _two() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    two.appendChild(para);
    para.classList.add("glow-red");
    turns++;
    h2.innerHTML = "X's Turn!";
    matrix[1] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    two.appendChild(para);
    para.classList.add("glow-blue");
    turns++;
    h2.innerHTML = "O's Turn!";
    matrix[1] = 2;
  }
  two.removeEventListener("click", _two);
  winCondition(matrix);
}
two.addEventListener("click", _two);

function _three() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    three.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[2] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    three.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[2] = 2;
  }
  three.removeEventListener("click", _three);
  winCondition(matrix);
}
three.addEventListener("click", _three);

function _four() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    four.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[3] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    four.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[3] = 2;
  }
  four.removeEventListener("click", _four);
  winCondition(matrix);
}
four.addEventListener("click", _four);

function _five() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    five.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[4] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    five.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[4] = 2;
  }
  five.removeEventListener("click", _five);
  winCondition(matrix);
}
five.addEventListener("click", _five);

function _six() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    six.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[5] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    six.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[5] = 2;
  }
  six.removeEventListener("click", _six);
  winCondition(matrix);
}
six.addEventListener("click", _six);

function _seven() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    seven.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[6] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    seven.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[6] = 2;
  }
  seven.removeEventListener("click", _seven);
  winCondition(matrix);
}
seven.addEventListener("click", _seven);

function _eight() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    eight.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[7] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    eight.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[7] = 2;
  }
  eight.removeEventListener("click", _eight);
  winCondition(matrix);
}
eight.addEventListener("click", _eight);

function _nine() {
  if (turns % 2 === 0) {
    let para = document.createElement("p");
    para.innerHTML = "O";
    nine.appendChild(para);
    para.classList.add("glow-red");
    h2.innerHTML = "X's Turn!";
    turns++;
    matrix[8] = 1;
  } else {
    let para = document.createElement("p");
    para.innerHTML = "X";
    nine.appendChild(para);
    para.classList.add("glow-blue");
    h2.innerHTML = "O's Turn!";
    turns++;
    matrix[8] = 2;
  }
  nine.removeEventListener("click", _nine);
  winCondition(matrix);
}
nine.addEventListener("click", _nine);
