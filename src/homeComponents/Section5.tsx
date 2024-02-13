import Image from "next/image";
import Img from "../../public/images/image 8.png"

export default function section5() {
    const questions = [
        {
            question: "Comment se déroule un accompagnement ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            question: "Comment se déroule un accompagnement ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            question: "Comment se déroule un accompagnement ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
            question: "Comment se déroule un accompagnement ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
    ]
    return (
        <section className="section-5">
            <h3 className="secondary-title orange">Exemples de thèmes d’accompagnement</h3>
            <div className="wrapper">
                <div className="left">
                    <Image src={Img} alt="Un coach en train de travailler"></Image>
                </div>
                <div className="right">
                    {
                        questions.map((item, index) => {
                            return (
                                <div className="question" key={index}>
                                    <p className="main-parag heavy_blue">{item.question}</p>
                                    <p className="answer secondary-parag heavy_blue">{item.answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}