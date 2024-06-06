body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);

container.setAttribute("style",
"display: flex; align-items: center; justify-content: center;");

for (let i = 0; i <= 256; i++) {
  squareDiv = document.createElement("div");
  squareDiv.classList.add("square");
  container.appendChild(squareDiv);
  squareDiv.setAttribute("style", "height: 25px; width: 25px;");
};

