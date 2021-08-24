import BookListItem from './BookListItem'
import BookDetail from './BookDetail'
import { Route, Switch, useHistory } from 'react-router-dom';

function BookList({ books, setBooks }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book}/>
    })

    // const bookSpecific = books.map((book) => {
    //     return <BookDetail key={book.id} book={book}/>
    // })

    return  (
        <div>
        {bookconstant}
        </div>
    )

}

export default BookList;