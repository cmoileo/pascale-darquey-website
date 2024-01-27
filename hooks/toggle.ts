export default function toggle() {
  const toggleElements = document.querySelectorAll(".toggle");

  if (toggleElements) {
    toggleElements.forEach((toggleElement) => {
      toggleElement.addEventListener("click", () => {
        console.log("clicked")
        toggleElement.classList.toggle("active");
      });
    });
  }
}