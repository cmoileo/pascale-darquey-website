export default function footer() {
    return (
        <footer>
            <form action="submit">
                <label htmlFor="Prénom">
                    <input type="text" name="Prénom" id="Prénom" placeholder="Prénom" />
                </label>
                <label htmlFor="Nom">
                    <input type="text" name="Nom" id="Nom" placeholder="Nom" />
                </label>
                <label htmlFor="Email">
                    <input type="email" name="Email" id="Email" placeholder="Email" />
                </label>
                <label htmlFor="Message">
                    <textarea name="Message" id="Message" placeholder="Quel est votre projet ?"></textarea>
                </label>
                <button className="main-cta white" type="submit">Envoyer</button>
            </form>
            <div className="wrapper">
                <h2 className={"main-title white"}>Darqpa Consulting</h2>
                <nav className="main-footer-nav">
                    <a className={"main-parag white"} href="">Les offres</a>
                    <a className={"main-parag white"} href="">Qui suis-je ?</a>
                    <a className={"main-parag white"} href="">Contact</a>
                </nav>
                <nav className="secondary-footer-nav">
                    <a className={"secondary-parag white"} href="">Politique de coockies</a>
                    <a className={"secondary-parag white"} href="">Mentions légales</a>
                    <a className={"secondary-parag white"} href="">Conditions Générales d'Utilisation</a>
                </nav>
            </div>
        </footer>
    )
}