import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

function BookList({ books, setBooks }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book}/>
    })

    // const bookSpecific = books.map((book) => {
    //     return <BookDetail key={book.id} book={book}/>
    // })
    const match = useRouteMatch()

    return  (
        <div>
        {bookconstant}
        <Route path={`${match.url}/:id`}>
            <BookDetail books={books}/>
        </Route>
         
        </div>
    )

}

export default BookList;