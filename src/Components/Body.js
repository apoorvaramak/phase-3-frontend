import React from 'react'
import BrowserRouter from 'react-router-dom'
import { Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './NavBar';

function Body () {
    
    return(
        <div>
            <Switch>
                <Route exact path="/books/new">
                    <NewBookForm />
                </Route>
                <Route exact path="/books">
                    <BookContainer />
                </Route>
                <Route exact path="/users">
                    <UserContainer />
                </Route>
                <Route exact path="/">

                </Route>
            </Switch>
        </div>
    )

}

export default Body



