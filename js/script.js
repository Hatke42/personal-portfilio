const nav_bar = document.querySelector(".nav-bar");
const nav_list = document.querySelector(".main-nav-list");
const nav_list_link = document.querySelectorAll(".main-nav-link");

const nav_bar_action = function () {
  nav_list.classList.toggle("active");
  if (nav_list.classList.contains("active")) {
    nav_bar.name = "close-outline";
    document.body.classList.add("overlay-header");
  } else {
    nav_bar.name = "reorder-four-outline";
    document.body.classList.remove("overlay-header");
  }
};

nav_bar.addEventListener("click", nav_bar_action);

nav_list_link.forEach((link) => {
  link.addEventListener("click", nav_bar_action);
});
