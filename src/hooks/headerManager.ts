export default function headerManager() {
  const toggleElements = document.querySelectorAll(".toggle");

  if (toggleElements) {
    toggleElements.forEach((toggleElement) => {
      toggleElement.addEventListener("click", () => {
        const subMenu: any = toggleElement.querySelector(".submenu")
        if (subMenu && toggleElement.classList.contains("active")) {
          toggleElement.classList.toggle("active");
          setTimeout(() => {
            subMenu.style.display = "none"
          }, 300)
        } else if (subMenu && !toggleElement.classList.contains("active")) {
          subMenu.style.display = "flex"
          setTimeout(() => {
            toggleElement.classList.toggle("active");
          }, 100)
        }
      });
    });
  }

  const burgerIcon = document.querySelector("#burger-icon");
  const menu = document.querySelector("header > ul");

  if (burgerIcon && menu) {
    burgerIcon.addEventListener("click", () => {
      console.log("clicked")
      if (burgerIcon.classList.contains("active")) {
        burgerIcon.classList.remove("active");
        menu.classList.remove("active");
      } else {
        burgerIcon.classList.add("active");
        menu.classList.add("active");
      }
    });

    const anchors = document.querySelectorAll("header a");

    anchors.forEach((anchor) => {
        anchor.addEventListener("click", () => {
            burgerIcon.classList.remove("active");
            menu.classList.remove("active");
        });
    })
  }
}