import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route, useParams, useRouteMatch } from 'react-router-dom'
import BookList from './BookList'
import BookDetail from './BookDetail'



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

    const match = useRouteMatch()
    return(
        <div>
            <BookList books={books} setBooks={setBooks}  setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} />
        </div>
    )
}

export default BookContainer;