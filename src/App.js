import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import BookContainer from './Components/BookContainer';
import UserContainer from './Components/UserContainer';
import UserListItem from './Components/UserListItem';

function App() {
  // const [users, setUsers] = useState([])
  //original fetch
  // useEffect(() => {
  //     fetch(`${process.env.REACT_APP_API_URL}/users`, {
  //         header: {
  //             "Content-Type": "application/json"
  //         } 
  //     })
  //     .then(response => response.json())
  //     .then(data => setUsers(data))
  // }, [])

  //fetch based on dogwalk trying to get the fetch to wait for load (will get user on second pause press)
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
  //       headers: { Accept: 'application/json' }
  //     });
  //     const parsedBody = await res.json();
  //     setUsers(parsedBody);
  //   }
  //   fetchUsers();
  // }, []);

  return (
    <div className="App">
      TEST HELLO
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/books">
            <BookContainer />
          </Route>
          {/* <Route
            exact path="/users/:id"
            render={({ match }) => 
            {let user = users.find((user) => {
              return user.id === parseInt(match.params.id)})
              console.log(users)
            return ( 
              <UserListItem
                user={user}
                // {users.find((user) => {
                //   return user.id === parseInt(match.params.id)})}
              />
            )}
            }/> */}
        <Route exact path="/users">
            <UserContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
