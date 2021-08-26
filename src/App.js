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


  return (
    <div className="App">
      <NavBar users={users} setIsClickedUser={setIsClickedUser} setIsClickedBook={setIsClickedBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Route path="/books">
        <BookContainer setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} currentUser={currentUser} />
      </Route>
      <Route path="/users">
        <UserContainer users={users} setIsClickedUser={setIsClickedUser} isClickedUser={isClickedUser} />
      </Route>
      <Route path="/home">
        <HomePage users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </Route>
      {/* <Redirect to="/home"/> */}
    </div>
  );
}

export default App;
