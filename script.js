const container = document.getElementById("grid-container");
const eraserButton = document.getElementById("eraser-button");
const randomColorButton = document.getElementById("random-color-button");
const blackColorButton = document.getElementById("black-color-button");
const eraser = document.getElementById("eraser");
const sizeInput = document.getElementById("size");
const sizeText = document.getElementById('size-text');
const textContainer = document.getElementById('text-container');


//make a grid using user input
function changeSize() {
  container.innerHTML = "";

  let size = parseInt(sizeInput.value);
  sizeText.textContent = `${size}*${size}`;

  CreateGrid(size, size);
}

eraserButton.addEventListener("click", function () {
  // Set all grid items back to default color
  const gridItems = document.querySelectorAll(".grid-cell");
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "";
  });
});

eraser.addEventListener("click", function () {
  setHoverEffect(() => "white");
});

randomColorButton.addEventListener("click", function () {
  setHoverEffect(getRandomColor);
});

blackColorButton.addEventListener("click", function () {
  setHoverEffect(() => "black");
});

function setHoverEffect(colorGetter) {
  const gridItems = document.querySelectorAll(".grid-cell");
  gridItems.forEach(function (item) {
    item.addEventListener("mouseover", function () {
      const color = colorGetter();
      item.style.backgroundColor = color;
    });
  });
}

function CreateGrid(rows, columns) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);

  for (let i = 0; i < rows * columns; i++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-cell";
  }
}
CreateGrid(16, 16);

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function clearGrid() {
  const gridItems = document.querySelectorAll(".grid-cell");
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "";
  });
}


