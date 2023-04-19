(() => {
  const headerElem = document.querySelector(".header");
  const menuBar = document.querySelector(".header .btn-all-menu");
  const bg = document.querySelector(".all-menu-bg");
  function handleMenu() {
    headerElem.classList.toggle("Active");
    if (headerElem.classList.contains("Active")) {
      bg.style.display = "block";
    } else {
      bg.style.display = "none";
    }
  }

  function closeMenu() {
    headerElem.classList.remove("Active");
    bg.style.display = "none";
  }
  menuBar.addEventListener("click", handleMenu);
  bg.addEventListener("click", closeMenu);
})();
