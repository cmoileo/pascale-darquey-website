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
        }
    ]
    return (
        <section className="section-6">
            <h2 className={"orange main-title"}>Ils m’ont fait confiance</h2>
            <div className="cards-c">
                {data.map((item, index) => {
                    return (
                        <article className="card" key={index}>
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
        </section>
    )
}