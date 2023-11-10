import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__site-title">Daily Rosary</Link>
            <ul className="navbar__days-list">
                <li className="navbar__days-list__day"><Link to="/monday" className="navbar__days-list__day__link">Monday - Joyful</Link></li>
                <li className="navbar__days-list__day"><Link to="/tuesday" className="navbar__days-list__day__link">Tuesday - Sorrowful</Link></li>
                <li className="navbar__days-list__day"><Link to="/wednesday" className="navbar__days-list__day__link">Wednesday - Glorious</Link></li>
                <li className="navbar__days-list__day"><Link to="/thursday" className="navbar__days-list__day__link">Thursday - Luminous</Link></li>
                <li className="navbar__days-list__day"><Link to="/friday" className="navbar__days-list__day__link">Friday - Sorrowful</Link></li>
                <li className="navbar__days-list__day"><Link to="/saturday" className="navbar__days-list__day__link">Saturday - Joyful</Link></li>
                <li className="navbar__days-list__day"><Link to="/sunday" className="navbar__days-list__day__link">Sunday - Glorious</Link></li>
            </ul>
        </div>
    )
}