import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Link, useParams, useRouteMatch, useLocation } from 'react-router-dom';

function BookList({ users, books, setBooks, isClickedBook, setIsClickedBook, currentUser, setCurrentUser }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book} setIsClickedBook={setIsClickedBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
    })

    const match = useRouteMatch()

    const params = useParams()

    const location = useLocation()

    return  (
        <div className ="book-list">
            {isClickedBook ? 
            <Route exact path={`${match.url}/:id`} >
                <BookDetail key = {params.id} users={users} books={books} setBooks={setBooks} setIsClickedBook={setIsClickedBook} currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route> :
            <div>
                {!location.pathname.includes("add") && Object.keys(currentUser).length > 0 ? 
                <button className="link-button-class"><Link to="/books/add" style={{ textDecoration: 'none', color: 'slateblue' }} >Add New Book</Link></button> : null
                }
                {bookconstant} 
            </div>}
        </div>
    )

}

export default BookList;