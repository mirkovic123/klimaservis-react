import { useState } from 'react'

const KontaktForma = (props) => {

    const [forma, setForma] = useState({
        ime: '',
        prezime: '',
        email: '',
        text: ''
    });

    const handleIme = (e) => {
        setForma({ ...forma, ime: e.target.value })
    }

    const handlePrezime = (e) => {
        setForma({ ...forma, prezime: e.target.value })
    }

    const handleEmail = (e) => {
        setForma({ ...forma, email: e.target.value })
    }

    const handleText = (e) => {
        setForma({ ...forma, text: e.target.value })
    }




    return (
        <div className="kontaktforma-div">

            <form className="form text-center" id='forma'>

                <div>
                    <span>Ime: </span>
                    <input type="text" className="form-control mt-1 text-center" value={forma.ime} onChange={handleIme} />
                </div>

                <div>
                    <span>Prezime: </span>
                    <input type="text" className="form-control mt-1 text-center" value={forma.prezime} onChange={handlePrezime} />
                </div>

                <div>
                    <span>Email: </span>
                    <input type="text" className="form-control mt-1 text-center" value={forma.email} onChange={handleEmail} />
                </div>

                <div>
                    <span>Poruka: </span>
                    <textarea type="text" className="form-control mt-1 text-center" value={forma.text} onChange={handleText}>

                    </textarea>
                </div>

            </form>

            <button type="button" onClick={() => props.alertFunkcija(forma)} className="btn btn-dark" id="button-check">POSALJI</button>




        </div>
    )
}

export default KontaktForma;