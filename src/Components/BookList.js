import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Link, useParams, useRouteMatch, useLocation } from 'react-router-dom';

function BookList({ books, setBooks, isClickedBook, setIsClickedBook, currentUser }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book} setIsClickedBook={setIsClickedBook} />
    })

    // const bookSpecific = books.map((book) => {
    //     return <BookDetail key={book.id} book={book}/>
    // })
    const match = useRouteMatch()

    const params = useParams()

    const location = useLocation()

    return  (
        <div className ="book-list">
            {isClickedBook ? 
            <Route exact path={`${match.url}/:id`} >
                <BookDetail key = {params.id} books={books} setBooks={setBooks} setIsClickedBook={setIsClickedBook} currentUser={currentUser} />
            </Route> :
            <div>
                {!location.pathname.includes("add") ? 
                <Link to="/books/add"  >Add New Book</Link> : null
                }
                {bookconstant} 
            </div>}
        </div>
    )

}

export default BookList;