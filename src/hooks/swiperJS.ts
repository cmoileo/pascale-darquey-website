export default function swiperJS() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const prevButton = document.getElementById('prev-slide')
    const nextButton = document.getElementById('next-slide')

    if (prevButton && nextButton && swiperWrapper) {
        prevButton.addEventListener('click', () => {
            swiperWrapper.scrollLeft -= 300;
        })

        nextButton.addEventListener('click', () => {
            swiperWrapper.scrollLeft += 300;
        })
    }
}