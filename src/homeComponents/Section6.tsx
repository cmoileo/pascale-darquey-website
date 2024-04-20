import Image from "next/image";
import OrangeImg from "../../public/images/yarn.png";

export default function section6() {
    const data = [
        {
            link: "https://www.orange.com/fr",
            alt: "orange",
            image: OrangeImg,
            title: "Orange",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            link: "https://www.orange.com/fr",
            alt: "orange",
            image: OrangeImg,
            title: "Orange",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            link: "https://www.orange.com/fr",
            alt: "orange",
            image: OrangeImg,
            title: "Orange",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
            link: "https://www.orange.com/fr",
            alt: "orange",
            image: OrangeImg,
            title: "Orange",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
    ]
    return (
        <section className="section-6">
            <h2 className={"orange main-title"}>Ils m’ont fait confiance</h2>
            <div className="cards-c">
                <svg id="prev-slide" width="66" height="70" viewBox="0 0 66 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_212_169)">
                        <rect width="41" height="39" rx="19.5" transform="matrix(-1 0 0 1 51 15.5)" fill="#E6F3FF"/>
                        <path d="M30.5 30.25L27 35M27 35L34 44.5M27 35L34 25.5" stroke="#004280" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_212_169" x="-5" y="0.5" width="71" height="69"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="7.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_212_169"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_212_169" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                <div className="swiper-wrapper wrapper">
                    {data.map((item, index) => {
                        return (
                            <article className="card swiper-slide" key={index}>
                                <a target="_blank" href={item.link}>
                                    <div className="card-image">
                                        <Image src={item.image} alt={item.alt}/>
                                    </div>
                                    <div className="card-content">
                                        <h3 className="heavy_blue main-title">{item.title}</h3>
                                        <p className="main-parag heavy_blue">{item.description}</p>
                                    </div>
                                </a>
                            </article>
                        )
                    })}
                </div>
                <svg id="next-slide" width="66" height="70" viewBox="0 0 66 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_212_168)">
                        <rect width="41" height="39" rx="19.5" transform="matrix(1 0 0 -1 15 54.5)" fill="#E6F3FF"
                              shape-rendering="crispEdges"/>
                        <path d="M35.5 39.75L39 35M39 35L32 25.5M39 35L32 44.5" stroke="#004280" stroke-width="2"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_212_168" x="0" y="0.5" width="71" height="69" filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                           values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset/>
                            <feGaussianBlur stdDeviation="7.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_212_168"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_212_168" result="shape"/>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    )
}