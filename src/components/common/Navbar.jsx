import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return(
        <div className="navbar-body">
            <div className="left">
                <Link to='/' className="name">Myles M.</Link>
            </div>

            <nav className="right">
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/skills'>Skills</NavLink>
                <Link to='/message'>Leave a Message!</Link>
            </nav>
        </div>
    );
}

export default Navbar;