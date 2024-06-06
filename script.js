body = document.querySelector("body");
jsScript = document.querySelector("script");
container = document.createElement("div");
container.classList.add("container");
body.insertBefore(container, jsScript);

const button = document.createElement("button");
body.insertBefore(button, container);
button.textContent = "Click me";
button.setAttribute("style", "padding: 10px 25px; border-radius: 5px; border: 2px solid rgb(95, 95, 124); background-color: rgb(197, 197, 219)")


container.setAttribute("style",
  "display: flex; align-items: center; justify-content: center; max-width: 400px; flex-wrap: wrap;");

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

