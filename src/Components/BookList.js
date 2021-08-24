import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

function BookList({ books, setBooks, isClickedBook, setIsClickedBook }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book} setIsClickedBook={setIsClickedBook} />
    })

    // const bookSpecific = books.map((book) => {
    //     return <BookDetail key={book.id} book={book}/>
    // })
    const match = useRouteMatch()

    return  (
        <div>
        {isClickedBook ? 
        <Route exact path={`${match.url}/:id`}>
            <BookDetail books={books} setIsClickedBook={setIsClickedBook} />
        </Route> :
        bookconstant} 
         
        </div>
    )

}

export default BookList;