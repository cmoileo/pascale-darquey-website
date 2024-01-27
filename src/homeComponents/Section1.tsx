import Image from "next/image";
import Pascale from "../../public/images/Pascale.jpeg"

export default function Section1() {
    return  (
       <section className="section-1">
           <Image src={Pascale} alt={"Photo de Pascale Darquey souriant et regardant la caméra"} />
           <div className="main-wrapper">
               <h2 className="main-title white">
                   Coach professionnelle <br/>
                   & superviseure
               </h2>
               <p className="main-parag white">Coaching – Supervision <br/> Management et communication interpersonnelle</p>
           </div>
           <div className="secondary-wrapper">
               <p className="main-parag blue">Une question ?</p>
               <a className="main-cta white" href="tel:+33 683888143">
                   <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M5.26291 4.6015H9.26291L11.2629 9.6015L8.76291 11.1015C9.83387 13.273 11.5914 15.0305 13.7629 16.1015L15.2629 13.6015L20.2629 15.6015V19.6015C20.2629 20.1319 20.0522 20.6406 19.6771 21.0157C19.302 21.3908 18.7933 21.6015 18.2629 21.6015C14.3622 21.3645 10.6831 19.708 7.91974 16.9447C5.15641 14.1813 3.49996 10.5022 3.26291 6.6015C3.26291 6.07107 3.47362 5.56236 3.8487 5.18729C4.22377 4.81222 4.73248 4.6015 5.26291 4.6015Z"
                           stroke="#E6F3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   06 83 88 81 43
               </a>
               <a className="secondary-cta blue" href="mailto:pascale.darquey@tasmane.com">
                   <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M1.26288 3.6015C1.26288 3.07107 1.47359 2.56236 1.84866 2.18729C2.22374 1.81222 2.73245 1.6015 3.26288 1.6015H17.2629C17.7933 1.6015 18.302 1.81222 18.6771 2.18729C19.0522 2.56236 19.2629 3.07107 19.2629 3.6015M1.26288 3.6015V13.6015C1.26288 14.1319 1.47359 14.6406 1.84866 15.0157C2.22374 15.3908 2.73245 15.6015 3.26288 15.6015H17.2629C17.7933 15.6015 18.302 15.3908 18.6771 15.0157C19.0522 14.6406 19.2629 14.1319 19.2629 13.6015V3.6015M1.26288 3.6015L10.2629 9.6015L19.2629 3.6015"
                           stroke="#004280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   pascale.darquey@tasmane.com</a>
           </div>
       </section>
    )
}