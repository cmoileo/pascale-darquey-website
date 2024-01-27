export default function toggle() {
  const toggleElements = document.querySelectorAll(".toggle");

  if (toggleElements) {
    toggleElements.forEach((toggleElement) => {
      toggleElement.addEventListener("click", () => {
        const subMenu = toggleElement.querySelector(".submenu")
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
}