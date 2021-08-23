import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import BookList from './BookList'



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
        <div>
            <Route exact path="/books">
                <BookList books={books} setBooks={setBooks} />
            </Route>
            {/* <Route exact path="/books/add">
                <AddBookForm books={books} setBooks={setBooks} />
            </Route> */}
            {/* <Route exact path="/books/:id">
                <BookDetail books={books} setBooks={setBooks} 
                book={books.find((book) => book.id === parseInt(match.params.id))}/>
            </Route>
            <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}
        </div>
    )
}

export default BookContainer;