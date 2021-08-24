import BookContainer from "./BookContainer";

{/* <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}




BookContainer
        // <Switch>
            {/* <Route path={`${match.url}/:id`}>
                <BookDetail books={books}/>
            </Route> */}
            // <Route exact path={match.url}>
                <BookList books={books} setBooks={setBooks}  setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} />
            // </Route>
            {/* <Route exact path="/books/add">
                <AddBookForm books={books} setBooks={setBooks} />
            </Route> */}
            {/* <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}
        // </Switch>
    )