import { useState, useEffect } from 'react'
import BookList from './BookList'
import AddBookForm from './AddBookForm';
import { Route } from 'react-router-dom'


function BookContainer({ isClickedBook, setIsClickedBook}){
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

    // const match = useRouteMatch()
    return(
        <div>
            <Route path="/books/add">
                <AddBookForm />
            </Route>
            <BookList books={books} setBooks={setBooks} setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} />
        </div>
    )
}


export default BookContainer;