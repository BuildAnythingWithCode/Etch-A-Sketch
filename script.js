body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);
squareDiv = document.createElement("div");
squareDiv.classList.add("square");
container.appendChild(squareDiv);