import { BrowserRouter, NavLink } from 'react-router-dom';

function NavBar(){

    return(
        <div>
            <BrowserRouter>
                <NavLink to="/books">Books</NavLink>
                <NavLink to="/users">Users</NavLink>
            </BrowserRouter>
        </div>
    )
}

export default NavBar;