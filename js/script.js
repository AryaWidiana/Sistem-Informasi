//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika study-menu diklik

document.querySelector("#study-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const study = document.querySelector("#study-menu");
document.addEventListener("click", function (e) {
  if (!study.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
