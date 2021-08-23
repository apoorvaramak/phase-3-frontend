function BookListItem({book}){
    return(
        <div>
            title: {book.title}
            {book.author}
        </div>
    )

}

export default BookListItem;