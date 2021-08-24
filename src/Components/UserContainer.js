import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom';
import UserList from './UserList'
import UserDetail from './UserDetail'

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

    const match = useRouteMatch()



    return(
        <BrowserRouter>
        <Switch>
            <Route path={`${match.url}/:id`}>
                <UserDetail users={users}/>
            </Route>
            <Route exact path={match.url}>
                <UserList users={users} setUsers={setUsers} />
            </Route>
            {/* <Route exact path="/books/add">
                <AddBookForm books={books} setBooks={setBooks} />
            </Route> */}
            {/* <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}
        </Switch>
        </BrowserRouter>
    )
}

export default UserContainer;