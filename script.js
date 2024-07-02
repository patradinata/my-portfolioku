// toggle class active untuk icon menu!
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// ketika icon menu nya di klik aktivkan class active
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

const buttonLogin = document.querySelector("#btn-login");
buttonLogin.onclick = () => {
  confirm("masukkan Nama anda");
  prompt("nama anda siapa");
};

const btn = document.querySelector(".btn");
btn.onclick = () => {
  alert("follow dulu instagram nya ya hehehe");
};

// klik navbar nya untuk menghilangkan class active
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//Animasi Typing!
var typed = new Typed(".multiple-text", {
  strings: ["Web Developer.", "UI UX Design.", "Web Design."],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});
