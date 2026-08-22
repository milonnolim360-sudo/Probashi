function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.getElementById("year").textContent =
  new Date().getFullYear();

document.querySelectorAll("#menu a").forEach(function(link) {
  link.addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
  });
});

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");

  if (window.scrollY > 30) {
    header.style.boxShadow =
      "0 5px 25px rgba(0,0,0,0.10)";
  } else {
    header.style.boxShadow =
      "0 2px 20px rgba(0,0,0,0.07)";
  }
});
