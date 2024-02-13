export default function useFAQManager() {
    const questions = document.querySelectorAll(".question");
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            questions.forEach((item) => {
                if (item !== question) {
                    item.classList.remove("active");
                }
            })
            question.classList.toggle("active");
        });
    });
}