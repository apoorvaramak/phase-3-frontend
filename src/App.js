import { Route  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import BookContainer from './Components/BookContainer';
import UserContainer from './Components/UserContainer';
import HomePage from './Components/HomePage'


function App() {
  const [isClickedUser, setIsClickedUser] = useState(false)
  const [isClickedBook, setIsClickedBook] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const [users, setUsers] = useState([]);

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/users`, {
          header: {
              "Content-Type": "application/json"
          } 
      })
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  const funcSetCurrentUser = (newUser) => {setCurrentUser(newUser)}

  return (
    <div className="App">
      <NavBar users={users} setIsClickedUser={setIsClickedUser} setIsClickedBook={setIsClickedBook} currentUser={currentUser} setCurrentUser={funcSetCurrentUser} />
      <Route path="/books">
        <BookContainer users={users} setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </Route>
      <Route path="/users">
        <UserContainer users={users} setIsClickedUser={setIsClickedUser} isClickedUser={isClickedUser} />
      </Route>
      <Route exact path="/">
        <HomePage users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={funcSetCurrentUser} />
      </Route>
    </div>
  );
}

export default App;
