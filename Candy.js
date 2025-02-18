var swapSound = new Audio("sound1.ogg");
var background = new Audio("Candy Crush Loop 5.mp3");
var crushSound = document.getElementById("crushSound");
var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var cols = 9;
var score = 0;
var currTile;
var otherTile;
window.onload = function() {
  startGame();
  window.setInterval(function() {
    background.play();
    crushCandy();
    slideCandy();
    generateCandy();
  }, 100);
};

function randomCandy() {
  return candies[Math.floor(Math.random() * candies.length)];
}

function startGame() {
  // Play background music
  background.play();

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      let tile = document.createElement("img");
      tile.id = r.toString() + "-" + c.toString();
      tile.src = "./images/" + randomCandy() + ".png";
      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("dragleave", dragLeave);
      tile.addEventListener("dragend", dragEnd);
      tile.addEventListener("drop", dragDrop);
      document.getElementById("board").append(tile);
      row.push(tile);
    }
    board.push(row);
  }
  console.log(board);
}

function dragStart(e) {
  currTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave(e) {
  // Optional: handle if needed
}

function dragDrop(e) {
  otherTile = this;
}

function dragEnd(e) {
  if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
    return;
  }

  let currCoords = currTile.id.split("-");
  let r = parseInt(currCoords[0]);
  let c = parseInt(currCoords[1]);

  let otherCoords = otherTile.id.split("-");
  let r2 = parseInt(otherCoords[0]);
  let c2 = parseInt(otherCoords[1]);

  let moveLeft = c2 == c - 1 && r == r2;
  let moveRight = c2 == c + 1 && r == r2;
  let moveUp = c2 == c && r2 == r - 1;
  let moveDown = c2 == c && r2 == r + 1;

  let isAdjacent = moveLeft || moveRight || moveDown || moveUp;
  if (isAdjacent) {
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;
    let validMove = checkValid();
    if (validMove) {
      swapSound.play();
    } else {
      let currImg = currTile.src;
      let otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;
    }
  }
}

function crushCandy() {
  crushThree();
  crushFour();
  crushFive();
  document.getElementById("score").innerText = score;
}

function crushThree() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 2; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        score += 30;
        swapSound.play();
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        score += 30;
        swapSound.play();
      }
    }
  }
}

function crushFour() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 3; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      let candy4 = board[r][c + 3];
      if (candy1.src === candy2.src && candy2.src === candy3.src && candy3.src === candy4.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        candy4.src = "./images/blank.png";
        score += 40;
        swapSound.play();
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows - 3; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      let candy4 = board[r + 3][c];
      if (candy1.src === candy2.src && candy2.src === candy3.src && candy3.src === candy4.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        candy4.src = "./images/blank.png";
        score += 40;
        swapSound.play();
      }
    }
  }
}

function crushFive() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 4; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      let candy4 = board[r][c + 3];
      let candy5 = board[r][c + 4];
      if (candy1.src === candy2.src && candy2.src === candy3.src && candy3.src === candy4.src && candy4.src === candy5.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        candy4.src = "./images/blank.png";
        candy5.src = "./images/blank.png";
        score += 50;
        swapSound.play();
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows - 4; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      let candy4 = board[r + 3][c];
      let candy5 = board[r + 4][c];
      if (candy1.src === candy2.src && candy2.src === candy3.src && candy3.src === candy4.src && candy4.src === candy5.src && !candy1.src.includes("blank")) {
        candy1.src = "./images/blank.png";
        candy2.src = "./images/blank.png";
        candy3.src = "./images/blank.png";
        candy4.src = "./images/blank.png";
        candy5.src = "./images/blank.png";
        score += 50;
        swapSound.play();
      }
    }
  }
}

function checkValid() {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols - 2; c++) {
      let candy1 = board[r][c];
      let candy2 = board[r][c + 1];
      let candy3 = board[r][c + 2];
      if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
        return true;
      }
    }
  }
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows - 2; r++) {
      let candy1 = board[r][c];
      let candy2 = board[r + 1][c];
      let candy3 = board[r + 2][c];
      if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
        return true;
      }
    }
  }
  return false;
}

function slideCandy() {
  for (let c = 0; c < cols; c++) {
    let ind = rows - 1;
    for (let r = rows - 1; r >= 0; r--) {
      if (!board[r][c].src.includes("blank")) {
        board[ind][c].src = board[r][c].src;
        ind -= 1;
      }
    }
    for (let r = ind; r >= 0; r--) {
      board[r][c].src = "./images/blank.png";
    }
  }
}

function generateCandy() {
  for (let c = 0; c < cols; c++) {
    if (board[0][c].src.includes("blank")) {
      board[0][c].src = "./images/" + randomCandy() + ".png";
    }
  }
}
