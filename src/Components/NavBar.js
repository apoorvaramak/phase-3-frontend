import { NavLink } from 'react-router-dom';
import CurrentUserDropdown from './CurrentUserDropdown';

function NavBar({ users, setIsClickedUser, setIsClickedBook, currentUser, setCurrentUser }){

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
            <div>
                Hi, <span> </span>
                <CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} /><span> </span>!
            </div>
        </nav>
    )
}

export default NavBar;