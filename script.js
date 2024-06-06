body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);
squareDiv = document.createElement("div");
squareDiv.classList.add("square");
container.appendChild(squareDiv);

container.setAttribute("style",
"display: flex; align-items: center; justify-content: center;");

squareDiv.setAttribute("style",
"height: 25px; width: 25px;"
);

