import FormaZakazivanje from "../components/FormaZakazivanje";
import Navigacija from "../components/Navigacija";
import { useNavigate } from "react-router-dom";

const ZakaziServis = () => {

    var zauzetiDatumi = ['18.9.2022', '17.9.2022', '22.9.2022', '23.9.2022', '24.9.2022']

    return (
        <div className="zakazi-div">
            <Navigacija />

            <h1 className="ns">AirCool Klima Servis</h1>

            <FormaZakazivanje datumi={zauzetiDatumi} />





        </div>
    )
}

export default ZakaziServis;