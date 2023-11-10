export default function Navbar() {
    return (
        <div className="navbar">
            <a href="/" className="navbar__site-title">Daily Rosary</a>
            <ul className="navbar__days-list">
                <li className="navbar__days-list__day"><a href="/monday" className="navbar__days-list__day__link">Monday - Joyful</a></li>
                <li className="navbar__days-list__day"><a href="/tuesday" className="navbar__days-list__day__link">Tuesday - Sorrowful</a></li>
                <li className="navbar__days-list__day"><a href="/wednesday" className="navbar__days-list__day__link">Wednesday - Glorious</a></li>
                <li className="navbar__days-list__day"><a href="/thursday" className="navbar__days-list__day__link">Thursday - Luminous</a></li>
                <li className="navbar__days-list__day"><a href="/friday" className="navbar__days-list__day__link">Friday - Sorrowful</a></li>
                <li className="navbar__days-list__day"><a href="/saturday" className="navbar__days-list__day__link">Saturday - Joyful</a></li>
                <li className="navbar__days-list__day"><a href="/sunday" className="navbar__days-list__day__link">Sunday - Glorious</a></li>
            </ul>
        </div>
    )
}