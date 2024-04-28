export default function carouselManager() {
    let isActive = true
    const stickyBlock: HTMLDivElement | null = document.querySelector('.sticky-block');
    const carouselWrapper = document.querySelector('.section-4 .carousel-wrapper');
    if (carouselWrapper && stickyBlock) {
        const carrouselWrapperTopOnPage = carouselWrapper.getBoundingClientRect().top + window.scrollY
        const carouselStyle = window.getComputedStyle(carouselWrapper);
        const carouselInitialTop = parseInt(carouselStyle.getPropertyValue('top'), 10);

        const handleCarouselScroll = () => {
            if (carouselWrapper) {
                const scrollPercentage = (window.scrollY - carrouselWrapperTopOnPage + carouselInitialTop) / stickyBlock.offsetHeight * .7
                const maxScroll = carouselWrapper.scrollWidth - carouselWrapper.clientWidth;
                const scrollLeftValue = scrollPercentage * maxScroll * 1.5;
                carouselWrapper.scrollLeft = scrollLeftValue
            }
        }

        const handleWindowScroll = () => {
            if (stickyBlock && carouselWrapper && isActive) {
                const carouselWrapperTop = carouselWrapper.getBoundingClientRect().top;
                if (carouselInitialTop === carouselWrapperTop) {
                    handleCarouselScroll();
                }
            }
        }

        window.addEventListener('scroll', handleWindowScroll);
        window.addEventListener('touchmove', handleWindowScroll);
    }

    const anchors = document.querySelectorAll('a')

    anchors.forEach(anchor => {
        anchor.addEventListener('click', () => {
            isActive = false
            setTimeout(() => {
                isActive = true
            }, 1000)
        })
    })
}
