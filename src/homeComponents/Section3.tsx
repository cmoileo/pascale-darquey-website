import Image from "next/image";
import Pascale from "../../public/images/Pascale.jpeg"

export default function Section3() {
    return  (
        <section className="section-3">
            <h2 className='secondary-title orange'>QUI SUIS-JE ?</h2>
            <Image src={Pascale} alt={"Pascale Darquey souriant et regardant la caméra"}></Image>
        </section>
    )
}