import { NavLink } from 'react-router-dom';
import CurrentUserDropdown from './CurrentUserDropdown';

function NavBar({ users, setIsClickedUser, setIsClickedBook, currentUser, setCurrentUser }){
    console.log("Navbar:", currentUser)

    function handleUserClick() {
        setIsClickedUser(false)
    }

    function handleBookClick() {
        setIsClickedBook(false)
    }

    // const handleChange = (e) => {
	// 	const selectedUser = users.find(user => user.id == e.target.value)
	// 	setCurrentUser(selectedUser)
	// }

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