import { Link } from 'react-router-dom'

const Navigacija = () => {
    return (
        <div className="navigacija-div">
            <nav>
                <Link to="/" id='trmn'>TERMIN</Link>
            </nav>
        </div>
    )
}

export default Navigacija;