import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { logout } from "../helpers/logout";

export const UserNav = () => {
    const navigate = useNavigate();
    const onLogout = () => {
        logout.logout(navigate);
      };


    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/mainPage">Main Page</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logSession">Log New Training Session</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/competitions">Competitions</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/searchGyms">Gym Search</Link>
            </li>
            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={onLogout}>Logout</Link>
            </li>
        </ul>
    )
}