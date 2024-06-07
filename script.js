const body = document.querySelector("body");
const jsScript = document.querySelector("script");
const container = document.createElement("div");
const button = document.createElement("button");
body.insertBefore(container, jsScript);
body.insertBefore(button, container);
button.textContent = "Change Canvas";
button.setAttribute("style", "padding: 10px 25px; border-radius: 5px; border: 2px solid rgb(95, 95, 124); background-color: rgb(197, 197, 219)");

body.setAttribute("style",
  "max-width: 100vw; height: 100vh; display: flex; justify-content: space-around; align-items: center; flex-direction: column; background-color: rgb(36, 36, 43);");

container.setAttribute("style",
  "display: flex; align-items: center; justify-content: center; width: 400px; height: 400px; flex-wrap: wrap;");

for (let i = 0; i <= 255; i++) {
  const squareDiv = document.createElement("div");
  container.appendChild(squareDiv);
  squareDiv.setAttribute("style", "height: 25px; width: 25px; background-color: rgb(197, 197, 219);");

  squareDiv.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "rgb(95, 95, 124)";
  });

  squareDiv.addEventListener("mouseleave", (event) => {
    function randomColor() {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      return `rgb(${red}, ${green}, ${blue})`;
    };
    event.target.style.backgroundColor = randomColor();
  });

  let opacityValue = 1;
  squareDiv.addEventListener("mousedown", (event) => {
    event.target.style.opacity = opacityValue - 0.1;
  });
};

button.addEventListener("click", () => {

  let numOfSquares = Number(prompt("How many squares would you like per side?"));

  if (numOfSquares >= 1 &&
    numOfSquares <= 100 &&
    typeof numOfSquares === 'number' &&
    Number.isInteger(numOfSquares)) {

    body.removeChild(container);

    const containerNew = document.createElement("div");
    body.insertBefore(containerNew, jsScript);

    containerNew.setAttribute("style",
      "display: flex; align-items: center; justify-content: center; width: 400px; height: 400px; flex-wrap: wrap;");

    for (let i = 0; i <= (numOfSquares * numOfSquares) - 1; i++) {

      const squareDivNew = document.createElement("div");
      containerNew.appendChild(squareDivNew);
      squareDivNew.setAttribute("style", "background-color: rgb(197, 197, 219);");

      squareDivNew.style.width = (400 / numOfSquares) + `px`;
      squareDivNew.style.height = (400 / numOfSquares) + `px`;

      squareDivNew.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "rgb(95, 95, 124)";
      });

      squareDivNew.addEventListener("mouseleave", (event) => {
        function randomColor() {
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          return `rgb(${red}, ${green}, ${blue})`;
        };
        event.target.style.backgroundColor = randomColor();
      });

      let opacityValue = 1;
      squareDivNew.addEventListener("mousedown", (event) => {
        event.target.style.opacity = opacityValue - 0.1;
      });
    };
  } else {
    alert("You must enter an integer between 1 and 100.");
  }
});