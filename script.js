body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);

container.setAttribute("style",
  "display: flex; align-items: center; justify-content: center; max-width: 400px; flex-wrap: wrap;");

for (let i = 0; i <= 255; i++) {
  squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.appendChild(squareDiv);
  squareDiv.setAttribute("style", "height: 25px; width: 25px; background-color: rgb(131, 131, 155);");

  squareDiv.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "rgb(95, 95, 124)";
  });

  squareDiv.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "rgb(131, 131, 155)";
  });
};

