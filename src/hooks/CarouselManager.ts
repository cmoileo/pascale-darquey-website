export default function carouselManager() {
    const stickyBlock = document.querySelector('.sticky-block');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carrouselWrapperTopOnPage = carouselWrapper.getBoundingClientRect().top + window.scrollY
    const carouselStyle = window.getComputedStyle(carouselWrapper);
    const carouselInitialTop = parseInt(carouselStyle.getPropertyValue('top'), 10);

    const handleCarouselScroll = () => {
        if (carouselWrapper) {
            const scrollPercentage = (window.scrollY - carrouselWrapperTopOnPage + carouselInitialTop) / stickyBlock.offsetHeight
            const maxScroll = carouselWrapper.scrollWidth - carouselWrapper.clientWidth;
            const scrollLeftValue = scrollPercentage * maxScroll * 1.5;
            carouselWrapper.scrollLeft = scrollLeftValue
        }
    }

    const handleWindowScroll = () => {
        if (stickyBlock && carouselWrapper) {
            const carouselWrapperTop = carouselWrapper.getBoundingClientRect().top;
            if (carouselInitialTop === carouselWrapperTop) {
                handleCarouselScroll();
            }
        }
    }

    window.addEventListener('scroll', handleWindowScroll);
}
