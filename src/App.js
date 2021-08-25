import { Route  } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import './App.css';
import BookContainer from './Components/BookContainer';
import UserContainer from './Components/UserContainer';


function App() {
  const [isClickedUser, setIsClickedUser] = useState(false)
  const [isClickedBook, setIsClickedBook] = useState(false)


  return (
    <div className="App">
        <NavBar  setIsClickedUser={setIsClickedUser} setIsClickedBook={setIsClickedBook}/>
          <Route path="/books">
            <BookContainer setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} />
          </Route>
          <Route path="/users">
            <UserContainer setIsClickedUser={setIsClickedUser} isClickedUser={isClickedUser} />
          </Route>
    </div>
  );
}

export default App;
