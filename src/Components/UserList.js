import UserListItem from './UserListItem';
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import UserDetail from './UserDetail'
// import { useState } from 'react' 

function UserList({ users, setIsClickedUser, isClickedUser }){

    console.log("UserList", users)
    const userconstant = users.map((user) => {
        return (<UserListItem key= {user.id} user = {user} users={users} setIsClickedUser={setIsClickedUser} />)
    })
    const match = useRouteMatch()

    const params = useParams()

    return  (
        <div>
            {/* <Route path="/users/:id"> */}
            {isClickedUser ? 
            <Route exact path={`${match.url}/:id`}>
                <UserDetail key = {params.id} users={users} setIsClickedUser={setIsClickedUser} />
            </Route> :
            userconstant}
        </div>

    )

}

export default UserList;