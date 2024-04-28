"use client"
import {FormEvent} from "react";
import {useState} from "react";

export default function footer() {
    const [isSent, setIsSent] = useState(false)
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        let target
        if (e.currentTarget.Prénom && e.currentTarget.Nom && e.currentTarget.Email && e.currentTarget.Message) {
            target = {
                Prénom: e.currentTarget.Prénom.value,
                Nom: e.currentTarget.Nom.value,
                Email: e.currentTarget.Email.value,
                Message: e.currentTarget.Message.value,
                Tel: e.currentTarget.Tel.value
            }
        }

        try {
           const api = await fetch("/api/sendMail", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(target)
            })
            api.status === 200 ? setIsSent(true) : setIsSent(false)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <footer>
            <div className="container">
                <h2 id="contact" className={"main-title orange"}>Pour me contacter</h2>
                <p className="main-parag heavy_blue">Par mail :</p>
            </div>
            {
                isSent ? <h3 className="validation-message secondary-title heavy_blue">Votre message a bien été envoyé, vous allez bientôt être contacté.</h3> : <form onSubmit={handleSubmit}>
                    <input type="text" name="Prénom" placeholder="Prénom" required/>
                    <input type="text" name="Nom" placeholder="Nom" required/>
                    <input type="email" name="Email" placeholder="Email" required/>
                    <input type="tel" name="Tel" placeholder="Téléphone" required/>
                    <textarea name="Message" placeholder="Message" required/>
                    <button className="main-cta white" type="submit">Envoyer</button>
                </form>
            }
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