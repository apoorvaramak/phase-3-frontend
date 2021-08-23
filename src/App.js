import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './App.css';
import BookContainer from './Components/BookContainer';

function App() {
  return (
    <div className="App">
      TEST HELLO
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/books">
            <BookContainer />
          </Route>
          {/* <Route exact path="/users">
            <UserContainer />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
