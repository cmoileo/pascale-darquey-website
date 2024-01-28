import Image from "next/image";
import Image2 from "../../public/images/image 7.png"

export default function Section4() {
    const carousel = [
        {
            image: Image2,
            alt: "carousel-1",
            date: "2021-06-06",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            image: Image2,
            alt: "carousel-1",
            date: "2021-06-06",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            image: Image2,
            alt: "carousel-1",
            date: "2021-06-06",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
    ]
    return (
        <section className="section-4">
            <div className="carousel-wrapper">
                {
                    carousel.map((item, index) => {
                        return (
                            <div className="carousel-item" key={index}>
                                <div className="left">
                                    <Image src={item.image} alt={item.alt}></Image>
                                </div>
                                <div className="right">
                                    <h3 className="secondary-title orange">{item.date}</h3>
                                    <p className="main-parag heavy_blue">{item.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="sticky-block"></div>
        </section>
    )
}