import { Link } from "react-router-dom"

const DAYS = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday",
    "Friday", "Saturday"
]

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__site-title">Daily Rosary</Link>
            <ul className="navbar__days-list">
                {DAYS.map(d => <NavbarDayLink dayOfWeek={d} />)}
            </ul>
        </div>
    )
}

function NavbarDayLink(props) {
    return (
        <li className="navbar__days-list__day">
            <Link
                to={"/" + props.dayOfWeek.toLowerCase()}
                className="navbar__days-list__day__link">
                {props.dayOfWeek}
            </Link>
        </li>
    )
}