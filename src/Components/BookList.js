import BookListItem from './BookListItem'

function BookList({ books }){

    const bookconstant = books.map((book) => {
        return <BookListItem key={book.id} book={book}/>
    })

    return  (
        <div>
            {bookconstant}
        </div>
    )

}

export default BookList;