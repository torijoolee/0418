(() => {
  const navTitle = document.querySelectorAll(".all-menu > li");

  function handleNavMenu(event) {
    let before = document.querySelector(".all-menu >li.On");
    let current = event.target.parentNode;
    // console.log(current);
    if (current == null) return;
    if (before && before != current) {
      // console.log(before.children[2]);
      before.children[2].style.maxHeight = null;

      before.classList.remove("On");
    }
    current.classList.add("On");
    let inner = current.children[2];
    if (inner.style.maxHeight != 0) {
      inner.style.maxHeight = null;

      current.classList.remove("On");
    } else {
      inner.style.maxHeight = inner.scrollHeight + "px";
    }
  }

  navTitle.forEach((menu) => {
    menu.addEventListener("click", handleNavMenu);
  });
})();
