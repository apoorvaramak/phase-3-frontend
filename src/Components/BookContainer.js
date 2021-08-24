import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BookList from './BookList'
import BookListItem from './BookListItem'



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

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/books">
                <BookList books={books} setBooks={setBooks} />
            </Route>
            {/* <Route exact path="/books/add">
                <AddBookForm books={books} setBooks={setBooks} />
            </Route> */}
            <Route exact path="/books/:id">
                <BookListItem books={books} />
            </Route>
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