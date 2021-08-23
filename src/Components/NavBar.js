import { BrowserRouter, NavLink } from 'react-router-dom';

function NavBar(){

    return(
        <div>
        
                <NavLink to="/">Home</NavLink>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/users">Users</NavLink>
        
        </div>
    )
}

export default NavBar;