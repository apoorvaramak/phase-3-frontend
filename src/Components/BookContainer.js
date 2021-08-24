import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import BookList from './BookList'
import BookDetail from './BookDetail'



function BookContainer(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/books`, {
            header: {
                "Content-Type": "application/json"
            } 
        })
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [])

    const match = useRouteMatch()
    return(
        <BrowserRouter>
        <Switch>
            <Route path={`${match.url}/:id`}>
                <BookDetail books={books}/>
            </Route>
            <Route exact path={match.url}>
                <BookList books={books} setBooks={setBooks} />
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

export default BookContainer;