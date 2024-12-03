const burger = document.getElementById("burger-toggle");
const img = document.querySelector(".hero__container");
const main = document.getElementById("main");
console.log(main.children);

const fu = (e) => {
  if (e.target.checked) {
    for (let el of main.children) {
      el.classList.add("blur");
    }
  } else {
    for (let el of main.children) {
      el.classList.remove("blur");
    }
  }
};
burger.addEventListener("change", fu);
