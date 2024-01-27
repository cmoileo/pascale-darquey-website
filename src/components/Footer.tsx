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
            <nav>

            </nav>
        </footer>
    )
}