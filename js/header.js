(() => {
  const headerElem = document.querySelector(".header");
  const headerHeight = headerElem.getBoundingClientRect().top;
  const visual = document.querySelector(".visual");
  const visuHeight = visual.offsetHeight;

  console.log(headerHeight);
  console.log(visuHeight);

  function setHeader() {
    headerElem.classList.add("Load");
  }

  window.addEventListener("load", setHeader);
  document.addEventListener("scroll", () => {
    console.log(window.scrollY);
    let scroll = window.scrollY;

    if (scroll >= visuHeight - headerHeight) {
      headerElem.classList.add("Down");
    } else {
      headerElem.classList.remove("Down");
    }
  });
})();
