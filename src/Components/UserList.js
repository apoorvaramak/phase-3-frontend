import UserListItem from './UserListItem';
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import UserDetail from './UserDetail'

function UserList({ users }){

    console.log("UserList", users)
    const userconstant = users.map((user) => {
        return (<UserListItem key= {user.id} user = {user}/>)
    })
    const match = useRouteMatch()

    const params = useParams()

    return  (
        <div>
            {userconstant}
            <Route path={`${match.url}/:id`}>
            {/* <Route path="/users/:id"> */}
                <UserDetail key = {params.id} users={users}/>
            </Route>
        </div>

    )

}

export default UserList;