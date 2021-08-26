import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import BookList from './BookList'
import AddBookForm from './AddBookForm';



function BookContainer({ isClickedBook, setIsClickedBook, currentUser }){
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/books`, {
            header: {
                "Content-Type": "application/json",
                Accept: "application/json"
            } 
        })
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [])

    
    return(
        <div>
            <Route path="/books/add">
                <AddBookForm books={books} setBooks={setBooks}/>
            </Route>
            <BookList books={books} setBooks={setBooks}  setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} currentUser={currentUser} />
        </div>
    )
}

export default BookContainer;