// import { useState } from 'react';
import { Link } from 'react-router-dom';

function BookListItem({book, setIsClickedBook }){

    function handleClick(){
        setIsClickedBook(true)
    }
    
    return(
        <div>
            <div className="list-div">
                <p><b>Title:</b> <Link to={`/books/${book.id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'slateblue' }}>{book.title}</Link></p>
                <p><b>Author:</b> {book.author}</p>
            </div>
        </div>
    )

}

export default BookListItem;