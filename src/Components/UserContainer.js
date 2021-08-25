import { useState, useEffect } from 'react';
import UserList from './UserList'
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import UserDetail from './UserDetail'

function UserContainer({ users, setIsClickedUser, isClickedUser }){
    // const[users, setUsers] = useState([]);


    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/users`, {
    //         header: {
    //             "Content-Type": "application/json"
    //         } 
    //     })
    //     .then(response => response.json())
    //     .then(data => setUsers(data))
    // }, [])

    // const match = useRouteMatch()



    return(
        <div>
                <UserList users={users} setIsClickedUser={setIsClickedUser} isClickedUser={isClickedUser}/>
        </div>
    )
}

export default UserContainer;