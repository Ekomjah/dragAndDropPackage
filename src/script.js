const btn = document.querySelector("button");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll("li");
import "./styles.css";
function component() {
  btn.addEventListener("click", () => {
    items.forEach((item) => item.classList.toggle("show"));
    menu.classList.toggle("flex");
  });
}

component();
