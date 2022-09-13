

const FormaZakazivanje = () => {

    return (
        <div className="formazakazivanje-div">

            <form className="form text-center">

                <div>
                    <span>Ime: </span>
                    <input type="text" className="form-control mt-1 text-center" />
                </div>

                <div>
                    <span>Prezime: </span>
                    <input type="text" className="form-control mt-1 text-center" />
                </div>

                <div>
                    <span>Adresa: </span>
                    <input type="text" className="form-control mt-1 text-center" />
                </div>

                <div>
                    <span>Grad: </span>
                    <input type="text" className="form-control mt-1 text-center" />
                </div>

                <div>
                    <span>Tip: </span>
                    <select type="text" className="form-select mt-1 text-center">
                        <option>BASIC</option>
                        <option>MEDIUM</option>
                        <option>PREMIUM</option>
                    </select>
                </div>

                <div>
                    <span>Datum: </span>
                    <input type="text" className="form-control mt-1" />
                </div>

            </form>


        </div>
    )
}


export default FormaZakazivanje;