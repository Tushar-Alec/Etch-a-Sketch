function createGrid(rows, cols) {
  const gridContainer = document.getElementById("grid-container");
  const eraserButton = document.getElementById("eraser-button");
  const randomColorButton = document.getElementById("random-color-button");
  const blackColorButton = document.getElementById("black-color-button");
  const Eraser = document.getElementById("eraser");

 

  eraserButton.addEventListener("click", function () {
    // Set all grid items back to default color
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(function (item) {
      item.style.backgroundColor = "";
    });
  });

  Eraser.addEventListener("click", function () {
    setHoverEffect(() => "white");
  });




  randomColorButton.addEventListener("click", function () {
    setHoverEffect(getRandomColor);
  });

  blackColorButton.addEventListener("click", function () {
    setHoverEffect(() => "black");
  });

  function setHoverEffect(colorGetter) {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        const color = colorGetter();
        item.style.backgroundColor = color;
      });
    });
  }

  for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");

//     // Add hover effect
//      gridItem.addEventListener("mouseover", function () {
//     //   // Change the background color to a random color on hover
//       const randomColor = getRandomColor();
//       gridItem.style.backgroundColor = randomColor;
//      });

//     //Reset the color when the mouse leaves the grid item
//      gridItem.addEventListener('mouseout', function () {
//          gridItem.style.backgroundColor = '';
//     });

 

gridContainer.appendChild(gridItem);
   }
 }

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
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (item) {
      item.style.backgroundColor = "";
  });
}



createGrid(16, 16);