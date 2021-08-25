import { NavLink } from 'react-router-dom';

function NavBar({ setIsClickedUser, setIsClickedBook, currentUser }){

    function handleUserClick() {
        setIsClickedUser(false)
    }

    function handleBookClick() {
        setIsClickedBook(false)
    }

    return(
        <nav className="navigation">

            <NavLink exact to="/home"><li>Home</li></NavLink>
            <NavLink exact to="/books" onClick={handleBookClick}><li>Books</li></NavLink>
            <NavLink exact to="/users" onClick={handleUserClick}><li>Users</li></NavLink>
            {Object.keys(currentUser).length === 0 ? <div>Hi, new user!</div> : <div>Hi, {currentUser.name}!</div>}
        </nav>
    )
}

export default NavBar;