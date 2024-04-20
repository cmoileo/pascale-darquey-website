
export default function header() {
    return (
        <header>
            <h1 className="main-title white">Darqpa Consulting</h1>
                <ul>
                    <li className="main-parag white has-submenu toggle">
                        <p>Les offres</p>
                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.75 3L4.5 5M4.5 5L8 1M4.5 5L1 1" stroke="#E6F3FF" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <ul className="submenu">
                            <li><a href={"/#offres"} className="secondary-parag white">Offre 1</a></li>
                            <li><a href={"/#offres"} className="secondary-parag white">Offre 2</a></li>
                            <li><a href={"/#offres"} className="secondary-parag white">Offre 3</a></li>
                        </ul>
                    </li>
                    <a href={"/#qui-suis-je"} className="main-parag white">Qui suis-je ?</a>
                    <a href={"/#contact"} className="secondary-cta white">Contact</a>
                </ul>
            <svg id='burger-icon' width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#E6F3FF" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M13 1L1 13M1 1L13 13" stroke="black" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>
        </header>
    )
}