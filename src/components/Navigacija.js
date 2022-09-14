import { Link } from 'react-router-dom'

const Navigacija = () => {
    return (
        <div className="navigacija-div">
            <nav>
                <Link to="/" id='trmn'>SERVIS</Link>
                <Link to="/kontakt" id='knt'>KONTAKT</Link>
            </nav>
        </div>
    )
}

export default Navigacija;