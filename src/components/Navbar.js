import { Link } from "react-router-dom"
import { DAYS } from "../DAYS"

export default function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__title">Todays Daily Rosary</Link>
            <ul className="navbar__days-list">
                <li><Link to="/about" className="navbar__item">About</Link></li>
                {/* see this post for the key prop: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js */}
                {DAYS.map(d => <NavbarDayLink key={d} dayOfWeek={d} isCurrDay={props.currDay === d} />)}
            </ul>
        </div>
    )
}

function NavbarDayLink(props) {
    const active = props.isCurrDay ? "--active" : "";
    return (
        <li>
            <Link to={"/" + props.dayOfWeek.toLowerCase()} className={"navbar__item" + active}>
                {props.dayOfWeek}
            </Link>
        </li>
    )
}