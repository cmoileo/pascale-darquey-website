export default function offresManager() {
    const cards = document.querySelectorAll('.section-7 .cards-c article')
    const offres = document.querySelectorAll('.section-7 .offers-c .offer')

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            offres.forEach(offer => offer.classList.remove("active"))
            offres[index].classList.add("active")

            console.log('click', index)
        })
    })
}