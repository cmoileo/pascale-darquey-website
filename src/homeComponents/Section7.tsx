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

                    <div className="wrapper active">
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
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

                    <div className="wrapper active">
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
                            <a className={"main-cta white"} href="/#contact">Me contacter</a>
                        </div>
                        <div className="right">
                        <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
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

                    <div className="wrapper active">
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}

                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>
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
                                <a className={"main-cta white"} href="/#contact">Me contacter</a>
                            </div>
                        </div>
                        <div className="right">
                            <Image src={Image9} alt={"Des gens suivant un coaching autour d'une table"}></Image>
                        </div>
                        {/*<div className="floating">*/}
                        {/*    <svg width="367" height="148" viewBox="0 0 367 148" fill="none"*/}
                        {/*         xmlns="http://www.w3.org/2000/svg">*/}
                        {/*        <path fill-rule="evenodd" clip-rule="evenodd"*/}
                        {/*              d="M174.44 0.00665122C231.962 -0.363614 280.929 14.6254 316.636 32.5985C352.156 50.4767 377.036 72.8245 363.035 94.9336C349.336 116.566 300.06 130.318 248.971 139.449C199.966 148.208 144.596 151.796 96.0331 142.655C47.0638 133.437 15.1376 114.402 3.80453 93.3002C-7.32952 72.5689 6.55199 51.5263 37.8895 34.3927C71.2542 16.1507 117.797 0.371252 174.44 0.00665122Z"*/}
                        {/*              fill="#004280"/>*/}
                        {/*    </svg>*/}
                        {/*    <p className={"secondary-parag white"}>Séances de 1h30 à 2h00*/}
                        {/*        Durée : 3 à 12 mois Présentiel ou distanciel*/}
                        {/*        Entretien exploratoire gratuit</p>*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
}