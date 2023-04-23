(() => {
  const visuImgElems = document.querySelectorAll(".visual-slider li");
  const visuNavElems = document.querySelectorAll(".visu-nav li");
  let current = 0;
  const total = visuImgElems.length;

  function addIndex() {
    for (let i = 0; i < total; i++) {
      visuImgElems[i].dataset.index = i;
      visuNavElems[i].dataset.index = i;
    }
  }
  addIndex();

  function showImg(event) {
    const target = event.target.dataset.index;
    handleNavBtn(event);
    visuImgElems.forEach((elem) => {
      if (target == null) return;
      if (target == elem.dataset.index) {
        elem.classList.add("On");
      } else {
        elem.classList.remove("On");
      }
    });
  }

  function handleNavBtn(event) {
    visuNavElems.forEach((nav) => {
      nav.classList.remove("Active");
    });
    event.target.classList.add("Active");
  }

  let autoPlay = setInterval(function () {
    current++;
    visuImgElems.forEach((elem) => {
      if (current < total) {
        let index = elem.dataset.index;
        if (current == index) {
          elem.classList.add("On");
          visuNavElems[index].classList.add("Active");
        } else {
          elem.classList.remove("On");
          visuNavElems[index].classList.remove("Active");
        }
      } else {
        current = 0;
        visuImgElems[0].classList.add("On");
        visuNavElems[0].classList.add("Active");
      }
    });
  }, 5000);

  visuNavElems.forEach((nav) => {
    nav.addEventListener("click", showImg);
  });
})();
