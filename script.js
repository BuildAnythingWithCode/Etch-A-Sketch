body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);

const button = document.createElement("button");
body.insertBefore(button, container);
button.textContent = "Let's Get Set Up";
button.setAttribute("style", "padding: 10px 25px; border-radius: 5px; border: 2px solid rgb(95, 95, 124); background-color: rgb(197, 197, 219)")

button.addEventListener("click", () => {
  let numOfSquares = Number(prompt("How many squares would you like per side?"));
  if (numOfSquares >= 1 && 
    numOfSquares <= 100 && 
    typeof numOfSquares === 'number' && 
    Number.isInteger(numOfSquares) === true) {
    container.style.width = (numOfSquares * 25) + `px`;
  } else {
    alert("You must enter an integer between 1 and 100.");
  }
});

container.setAttribute("style",
  "display: flex; align-items: center; justify-content: center; width: 400px; flex-wrap: wrap;");

for (let i = 0; i <= 255; i++) {
  squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.appendChild(squareDiv);
  squareDiv.setAttribute("style", "height: 25px; width: 25px; background-color: rgb(197, 197, 219);");

  squareDiv.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "rgb(95, 95, 124)";
  });

  squareDiv.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "rgb(197, 197, 219)";
  });
};

