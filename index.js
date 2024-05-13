let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");
let light = document.querySelector(".light");

sun.onclick = function () {
  light.classList.add("light");
  light.classList.remove("dark");
};

moon.onclick = function () {
  light.classList.add("dark");
  light.classList.remove("light");
};

let menu = document.querySelector(".menu1");
let scroll1 = document.querySelector(".light");

function openMenu() {
  menu.classList.toggle("menu");
  scroll1.classList.toggle("hidden");
}

let colorinp = document.querySelector(".colorinp");
let colorBTN = document.querySelector(".colorBTN");
let colorH1 = document.querySelector(".H1");

colorBTN.onclick = function () {
  console.log(colorinp.value);
  colorH1.innerHTML = colorinp.value;
  document.body.style.backgroundColor = colorinp.value;
};
