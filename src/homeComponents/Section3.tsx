import Image from "next/image";
import Pascale from "../../public/images/Pascale.jpeg"
import Img from "../../public/images/image 6.png"

export default function Section3() {
    return  (
        <section id="qui-suis-je" className="section-3">
            <div className="first-wrapper">
                <h2 className='secondary-title orange'>QUI SUIS-JE ?</h2>
                <Image src={Pascale} alt={"Pascale Darquey souriant et regardant la caméra"}></Image>
                <p className="main-parag heavy_blue">En tant que coach expérimentée avec plus de 30 ans d'expérience en management international, je propose un accompagnement individuel et collectif. Ma approche intègre une sensibilité multiculturelle, combinant stratégie, co-développement et pratiques narratives. J'ai travaillé avec des entreprises variées, de l'ESN aux services automobiles, offrant un soutien à la définition de visions stratégiques et à la gestion du changement. En individuel, je renforce les postures professionnelles et explore de nouvelles orientations. Mes séances visent à développer la créativité, la cohésion d'équipe et à optimiser les performances.</p>
            </div>
            <div className="second-wrapper">
                <div className="left">
                    <h3 className="secondary-title orange">Mon approche du coaching</h3>
                    <p className="main-parag heavy_blue">Je mets mes expériences et ma sensibilité multiculturelle au service de l’accompagnement des personnes et des équipes. Par une approche systémique, je combine approche stratégique, techniques issues du co-développement, du team-building, des pratiques narratives, en respectant les valeurs et la personnalité des coachés. Je veille à ce que les solutions trouvées servent l’intérêt des coachés et celui de l’écosystème dans lequel ils interagissent.</p>
                </div>
                <div className="right">
                    <Image src={Img} alt={"Coach en train de travailler avec un professionnel"}></Image>
                </div>
            </div>
        </section>
    )
}