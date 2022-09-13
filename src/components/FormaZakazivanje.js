import { useState } from 'react'


const FormaZakazivanje = () => {

    const [servis, setServis] = useState({
        ime: '',
        prezime: '',
        adresa: '',
        grad: '',
        tip: '',
        datum: ''
    });

    const handleIme = (e) => {
        setServis({ ...servis, ime: e.target.value })
    }

    const handlePrezime = (e) => {
        setServis({ ...servis, prezime: e.target.value })
    }

    const handleAdresa = (e) => {
        setServis({ ...servis, adresa: e.target.value })
    }

    const handleGrad = (e) => {
        setServis({ ...servis, grad: e.target.value })
    }

    const handleTip = (e) => {
        setServis({ ...servis, tip: e.target.value })
    }

    const handleDatum = (e) => {
        setServis({ ...servis, datum: e.target.value })
    }



    return (
        <div className="formazakazivanje-div">

            <form className="form text-center">

                <div>
                    <span>Ime: </span>
                    <input type="text" className="form-control mt-1 text-center" value={servis.ime} onChange={handleIme} />
                </div>

                <div>
                    <span>Prezime: </span>
                    <input type="text" className="form-control mt-1 text-center" value={servis.prezime} onChange={handlePrezime} />
                </div>

                <div>
                    <span>Adresa: </span>
                    <input type="text" className="form-control mt-1 text-center" value={servis.adresa} onChange={handleAdresa} />
                </div>

                <div>
                    <span>Grad: </span>
                    <input type="text" className="form-control mt-1 text-center" value={servis.grad} onChange={handleGrad} />
                </div>

                <div>
                    <span>Tip: </span>
                    <select type="text" className="form-select mt-1 text-center" value={servis.tip} onChange={handleTip}>
                        <option>BASIC</option>
                        <option>MEDIUM</option>
                        <option>PREMIUM</option>
                    </select>
                </div>

                <div>
                    <span>Datum: </span>
                    <input type="text" className="form-control mt-1" value={servis.datum} onChange={handleDatum} />
                </div>

            </form>

            <button type="button" className="btn btn-dark" id="button-check">PROVERI TERMIN</button>

        </div>
    )
}


export default FormaZakazivanje;