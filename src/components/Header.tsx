export default function header() {
    return (
        <header>
            <h1 className="main-title white">Darqpa Consulting</h1>
            <ul>
                <a href="" className="main-parag white has-submenu">
                    Les offres
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.75 3L4.5 5M4.5 5L8 1M4.5 5L1 1" stroke="#E6F3FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="" className="main-parag white">Qui suis-je ?</a>
                <a href="" className="secondary-cta white">Contact</a>
            </ul>
        </header>
    )
}