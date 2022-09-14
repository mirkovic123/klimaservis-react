import KontaktForma from "../components/KontaktForma";
import Navigacija from "../components/Navigacija";


const Kontakt = () => {

    const alertFunkcija = (forma) => {
        alert("Postovani/a " + forma.ime + " " + forma.prezime + ", Vasa poruka je uspesno poslata!")
    }


    return (
        <div className="kontakt-div">
            <Navigacija />

            <h1 className="ns">AirCool Klima Servis</h1>

            <KontaktForma alertFunkcija={alertFunkcija} />

        </div>
    )
}

export default Kontakt;