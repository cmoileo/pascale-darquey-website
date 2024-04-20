import Image from "next/image";
import Image1 from "../../public/images/image 2.png"
import Image2 from "../../public/images/image 4.png"
import Image3 from "../../public/images/image 3.png"
import Image9 from "../../public/images/image 9.png"

export default function Section7() {
  return (
    <section className={"section-7"}>
      <h2 className={"main-title orange"}>Les offres</h2>
        <div className={"cards-c"}>
            <a href="/#offres">
                <article>
                    <Image src={Image1} alt={"offre de coaching"}></Image>
                    <div className="wrapper">
                        <h4 className={'secondary-title white'}>Le coaching</h4>
                        <button className="main-cta white">En savoir plus</button>
                    </div>
                </article>
            </a>
            <a href="/#offres">
                <article>
                    <Image src={Image2} alt={"offre de supervision"}></Image>
                    <div className="wrapper">
                        <h4 className={'secondary-title white'}>La supervision</h4>
                        <button className="main-cta white">En savoir plus</button>
                    </div>
                </article>
            </a>
            <a href="/#offres">
                <article>
                    <Image src={Image3} alt={"offre de changement de posture managériale"}></Image>
                    <div className="wrapper">
                        <h4 className={'secondary-title white'}>Changement de posture managériale</h4>
                        <button className="main-cta white">En savoir plus</button>
                    </div>
                </article>
            </a>
        </div>
        <div className="offers-c" id="offres">
            <div className="offer active">
                <h3 className="main-title heavy_blue">LE COACHING</h3>
                <div className="top">
                    <Image src={Image1} alt={"le coaching"}></Image>
                    <p className="main-parag heavy_blue">Quelque soit votre profil, travaillons ensemble sur vos forces
                        et faiblesses afin de réveiller votre plein potentiel. Cette offre s’adresse aussi bien aux
                        équipes ou aux managers qu’aux étudiants ou encore leurs parents. Des sessions de travail avec
                        le coach seront prévues afin de trouver les axes d’amélioration et de définir un plan pour y
                        parvenir.</p>
                </div>
                <div className="bottom">
                    <ul className="anchors-c">
                        <li className={"secondary-title orange active"}>Coaching individuel en entreprise</li>
                        <li className={"secondary-title orange"}>Coaching d’équipe</li>
                        <li className={"secondary-title orange"}>Coaching de particulier</li>
                    </ul>
                    <div className="wrapper">
                        <div className="left">
                            <p className="main-parag heavy_blue">Un parcours de plusieurs séances avec le coach autour
                                d’un objectif précis, pour rediriger votre énergie aux bons endroits, dépasser vos
                                freins, ou développer votre potentiel afin de vous sentir à votre place sans vous
                                épuiser, ni épuiser vos équipes.</p>
                            <div className="container">
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de dirigeant</span> :
                                    une <span>démarche réflexive</span>
                                    avec un coach <span>sparing partner</span> pour vous renforcer, vous améliorer,
                                    sortir de
                                    l’isolement ou changer d’angle de vue... <span>et pour améliorer vos résultats et ceux de vos équipes.</span>
                                </p>
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de manager</span> : un
                                    parcours pour vous questionner différemment afin d’élaborer des solutions nouvelles
                                    qui vous conviennent dans le respect de qui vous êtes et de vos préférences
                                    naturelles d’action.</p>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        <div className="floating">
                            <p className={"secondary-parag white"}>Séances de 1h30 à 2h00
                                Durée : 3 à 12 mois Présentiel ou distanciel
                                Entretien exploratoire gratuit</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offer">
                <h3 className="main-title heavy_blue">LA SUPERVISION</h3>
                <div className="top">
                    <Image src={Image2} alt={"le coaching"}></Image>
                    <p className="main-parag heavy_blue">Quelque soit votre profil, travaillons ensemble sur vos forces
                        et faiblesses afin de réveiller votre plein potentiel. Cette offre s’adresse aussi bien aux
                        équipes ou aux managers qu’aux étudiants ou encore leurs parents. Des sessions de travail avec
                        le coach seront prévues afin de trouver les axes d’amélioration et de définir un plan pour y
                        parvenir.</p>
                </div>
                <div className="bottom">
                    <ul className="anchors-c">
                        <li className={"secondary-title orange active"}>Coaching individuel en entreprise</li>
                        <li className={"secondary-title orange"}>Coaching d’équipe</li>
                        <li className={"secondary-title orange"}>Coaching de particulier</li>
                    </ul>
                    <div className="wrapper">
                        <div className="left">
                            <p className="main-parag heavy_blue">Un parcours de plusieurs séances avec le coach autour
                                d’un objectif précis, pour rediriger votre énergie aux bons endroits, dépasser vos
                                freins, ou développer votre potentiel afin de vous sentir à votre place sans vous
                                épuiser, ni épuiser vos équipes.</p>
                            <div className="container">
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de dirigeant</span> :
                                    une <span>démarche réflexive</span>
                                    avec un coach <span>sparing partner</span> pour vous renforcer, vous améliorer,
                                    sortir de
                                    l’isolement ou changer d’angle de vue... <span>et pour améliorer vos résultats et ceux de vos équipes.</span>
                                </p>
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de manager</span> : un
                                    parcours pour vous questionner différemment afin d’élaborer des solutions nouvelles
                                    qui vous conviennent dans le respect de qui vous êtes et de vos préférences
                                    naturelles d’action.</p>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        <div className="floating">
                            <p className={"secondary-parag white"}>Séances de 1h30 à 2h00
                                Durée : 3 à 12 mois Présentiel ou distanciel
                                Entretien exploratoire gratuit</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="offer">
                <h3 className="main-title heavy_blue">CHANGEMENT DE POSTURE MANAGÉRIALE</h3>
                <div className="top">
                    <Image src={Image3} alt={"le coaching"}></Image>
                    <p className="main-parag heavy_blue">Quelque soit votre profil, travaillons ensemble sur vos forces
                        et faiblesses afin de réveiller votre plein potentiel. Cette offre s’adresse aussi bien aux
                        équipes ou aux managers qu’aux étudiants ou encore leurs parents. Des sessions de travail avec
                        le coach seront prévues afin de trouver les axes d’amélioration et de définir un plan pour y
                        parvenir.</p>
                </div>
                <div className="bottom">
                    <ul className="anchors-c">
                        <li className={"secondary-title orange active"}>Coaching individuel en entreprise</li>
                        <li className={"secondary-title orange"}>Coaching d’équipe</li>
                        <li className={"secondary-title orange"}>Coaching de particulier</li>
                    </ul>
                    <div className="wrapper">
                        <div className="left">
                            <p className="main-parag heavy_blue">Un parcours de plusieurs séances avec le coach autour
                                d’un objectif précis, pour rediriger votre énergie aux bons endroits, dépasser vos
                                freins, ou développer votre potentiel afin de vous sentir à votre place sans vous
                                épuiser, ni épuiser vos équipes.</p>
                            <div className="container">
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de dirigeant</span> :
                                    une <span>démarche réflexive</span>
                                    avec un coach <span>sparing partner</span> pour vous renforcer, vous améliorer,
                                    sortir de
                                    l’isolement ou changer d’angle de vue... <span>et pour améliorer vos résultats et ceux de vos équipes.</span>
                                </p>
                                <p className={"item heavy_blue secondary-parag"}><span>Coaching de manager</span> : un
                                    parcours pour vous questionner différemment afin d’élaborer des solutions nouvelles
                                    qui vous conviennent dans le respect de qui vous êtes et de vos préférences
                                    naturelles d’action.</p>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        <div className="floating">
                            <p className={"secondary-parag white"}>Séances de 1h30 à 2h00
                                Durée : 3 à 12 mois Présentiel ou distanciel
                                Entretien exploratoire gratuit</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
}