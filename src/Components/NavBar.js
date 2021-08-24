import { NavLink } from 'react-router-dom';

function NavBar({ setIsClickedUser, setIsClickedBook }){

    function handleUserClick() {
        setIsClickedUser(false)
    }

    function handleBookClick() {
        setIsClickedBook(false)
    }

    return(
        <nav className="navigation">

            <NavLink exact to="/"><li>Home</li></NavLink>
            <NavLink exact to="/books" onClick={handleBookClick}><li>Books</li></NavLink>
            <NavLink exact to="/users" onClick={handleUserClick}><li>Users</li></NavLink>
        </nav>
    )
}

export default NavBar;