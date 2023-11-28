const gridContainer = document.getElementById("grid-container");
  const eraserButton = document.getElementById("eraser-button");
  const randomColorButton = document.getElementById("random-color-button");
  const blackColorButton = document.getElementById("black-color-button");
  const eraser = document.getElementById("eraser");
  const slider = document.querySelector("#slider");
  const sliderValue = document.querySelector("#slider-value");

  sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

  eraserButton.addEventListener("click", function () {
    // Set all grid items back to default color
    const gridItems = document.querySelectorAll(".grid-item");
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

  slider.oninput = function() {
    clearGrid();
    createGrid();
    sliderValue.textContent = `${this.value} x ${this.value} (Resolution)`;
  };

  function setHoverEffect(colorGetter) {
    const gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        const color = colorGetter();
        item.style.backgroundColor = color;
      });
    });
  }

   function createGrid(col , rows) {
     const squaresPerSide = parseInt(slider.value);
    for (let i = 0; i < col * rows; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
     }
   }

  

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function clearGrid() {
    gridContainer.innerHTML = "";
  }

  createGrid(16,16);