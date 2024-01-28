import Image from "next/image";
import Pascale from "../../public/images/Pascale.jpeg"

export default function Section3() {
    return  (
        <section className="section-3">
            <div className="first-wrapper">
                <h2 className='secondary-title orange'>QUI SUIS-JE ?</h2>
                <Image src={Pascale} alt={"Pascale Darquey souriant et regardant la caméra"}></Image>
                <p className="main-parag heavy_blue">En tant que coach expérimentée avec plus de 30 ans d'expérience en management international, je propose un accompagnement individuel et collectif. Ma approche intègre une sensibilité multiculturelle, combinant stratégie, co-développement et pratiques narratives. J'ai travaillé avec des entreprises variées, de l'ESN aux services automobiles, offrant un soutien à la définition de visions stratégiques et à la gestion du changement. En individuel, je renforce les postures professionnelles et explore de nouvelles orientations. Mes séances visent à développer la créativité, la cohésion d'équipe et à optimiser les performances.</p>
            </div>
        </section>
    )
}