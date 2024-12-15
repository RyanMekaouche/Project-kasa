import react from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">
                <div className="navbar__logo">
                    <img src="logo-kasa.png" alt="logo"></img>
                </div>
            </NavLink>
            <ul className="navbar__link">
                <NavLink to="/">
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;