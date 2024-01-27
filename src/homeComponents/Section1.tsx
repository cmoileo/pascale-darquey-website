import Image from "next/image";
import Pascale from "../../public/images/Pascale.jpeg"

export default function Section1() {
    return  (
       <section className="section-1">
           <Image src={Pascale} alt={"Photo de Pascale Darquey souriant et regardant la caméra"} />
           <div className="wrapper">
               <h2 className="main-title">
                   Coach professionnelle
                   & superviseure
               </h2>
               <p className="main-parag">Coaching – Supervision – Management et communication interpersonnelle</p>
           </div>
       </section>
    )
}