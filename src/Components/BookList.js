import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

function BookList({ books, setBooks, isClickedBook, setIsClickedBook, currentUser }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book} setIsClickedBook={setIsClickedBook} />
    })

    // const bookSpecific = books.map((book) => {
    //     return <BookDetail key={book.id} book={book}/>
    // })
    const match = useRouteMatch()

    const params = useParams()

    function addBookClick(e){
        e.stopPropagation()
    }

    return  (
        <div className ="book-list">
            {isClickedBook ? 
            <Route exact path={`${match.url}/:id`} >
                <BookDetail key = {params.id} books={books} setBooks={setBooks} setIsClickedBook={setIsClickedBook} currentUser={currentUser} />
            </Route> :
            <div>
                <Link to="/books/add" onClick={addBookClick} >Add New Book</Link>
                {bookconstant} 
            </div>}
        </div>
    )

}

export default BookList;