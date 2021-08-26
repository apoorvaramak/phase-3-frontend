import { Link } from 'react-router-dom';

function UserListItem({ user, users, setIsClickedUser }){

    function handleClick(){
        setIsClickedUser(true)
    }
    return(
        <div>
            <div className="detail-div" >
                <p><Link to={`/users/${user.id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'slateblue' }}>{user.name}</Link></p>
            </div> 
        </div>
    )

}

export default UserListItem;