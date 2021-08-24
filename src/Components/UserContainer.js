import { useState, useEffect } from 'react';
import UserList from './UserList'
// import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import UserDetail from './UserDetail'

function UserContainer(){
    const[users, setUsers] = useState([]);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
            header: {
                "Content-Type": "application/json"
            } 
        })
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])

    // const match = useRouteMatch()



    return(
        <div>
                <UserList users={users} setUsers={setUsers} />
        </div>
                // <Route path={`${match.url}/:id`}>
                //     <UserDetail users={users}/>
                // </Route>
        // <BrowserRouter>
        //     <Route exact path={match.url}>
            // </Route>
            //  <Route exact path="/books/add">
                // <AddBookForm books={books} setBooks={setBooks} />
            // </Route> */}
            
        // </BrowserRouter>
    )
}

export default UserContainer;