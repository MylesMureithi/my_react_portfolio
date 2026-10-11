import { Link, NavLink, useLocation } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import './Navbar.css'

function Navbar() {
    const { pathname } = useLocation();


    return(
        <div className="navbar-body">
            <div className="left">
                <Link to='/' className="name">Myles M.</Link>
            </div>

            <nav className="right">
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <HashLink smooth to={`${pathname}#message`}>Leave a Message!</HashLink>
            </nav>
        </div>
    );
}

export default Navbar;