import { BrowserRouter, NavLink } from 'react-router-dom';

function NavBar(){

    return(
        <nav className="navigation">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/books"><li>Books</li></NavLink>
            <NavLink to="/users"><li>Users</li></NavLink>
        </nav>
    )
}

export default NavBar;