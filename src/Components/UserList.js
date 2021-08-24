import UserListItem from './UserListItem';
import { Route } from 'react-router-dom'

function UserList({ users }){

    const userconstant = users.map((user) => {
        return (<UserListItem key= {user.id} user = {user}/>)
    })

    return  (
        <div>
            {userconstant}
        </div>

    )

}

export default UserList;