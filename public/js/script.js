const nav = document.querySelector("nav");
const hamburger = document.querySelector(".hamburger");
console.log("SCRIPT IS WORKING");

if (nav && hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}