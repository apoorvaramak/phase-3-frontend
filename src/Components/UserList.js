import UserListItem from './UserListItem';
import { Route } from 'react-router-dom'

function UserList({ users }){

    const userconstant = users.map((user) => {
        return (
            <div key={user.id} className="list-div">
                <p>Name: {user.name}</p>
            </div>)
    })

    return  (
        <div>
            {userconstant}
        </div>

    )

}

export default UserList;