import KontaktForma from "../components/KontaktForma";
import Navigacija from "../components/Navigacija";


const Kontakt = () => {
    return (
        <div className="kontakt-div">
            <Navigacija />

            <h1 className="ns">AirCool Klima Servis</h1>

            <KontaktForma />

        </div>
    )
}

export default Kontakt;