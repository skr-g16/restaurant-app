import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("change", () => {
  if (burger.checked) {
    navLinks.classList.add("open");
  } else {
    navLinks.classList.remove("open");
  }
});
