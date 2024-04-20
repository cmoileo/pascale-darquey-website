export default function offresManager() {
    const cards = document.querySelectorAll('.section-7 .cards-c article')
    const offres = document.querySelectorAll('.section-7 .offers-c .offer')

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            offres.forEach(offer => offer.classList.remove("active"))
            offres[index].classList.add("active")
        })
    })

    offres.forEach((offer, index) => {
        const anchors = offer.querySelectorAll('.anchors-c li')
        const wrappers = offer.querySelectorAll('.wrapper')
        anchors.forEach((anchor, index) => {
            anchor.addEventListener('click', () => {
                anchors.forEach(anchor => anchor.classList.remove("active"))
                anchor.classList.add("active")

                wrappers.forEach(wrapper => wrapper.classList.remove("active"))
                wrappers[index].classList.add("active")
            })
        })
    })


    const menuItems = document.querySelectorAll('.submenu li')

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            offres.forEach(offer => offer.classList.remove("active"))
            offres[index].classList.add("active")

            console.log('click', index)
        })
    })
}