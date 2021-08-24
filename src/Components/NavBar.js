import { NavLink } from 'react-router-dom';

function NavBar(){

    return(
        <nav className="navigation">

            <NavLink exact to="/"><li>Home</li></NavLink>
            <NavLink exact to="/books"><li>Books</li></NavLink>
            <NavLink exact to="/users"><li>Users</li></NavLink>
        </nav>
    )
}

export default NavBar;