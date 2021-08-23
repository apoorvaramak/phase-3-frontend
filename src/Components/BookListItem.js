import { useState } from 'react';

function BookListItem({book}){
    const [showDetails, setShowDetails] = useState(false)

    function handleShowDetails(){
        setShowDetails(!showDetails)
    }
    const reviewMap = book.reviews.map((review) => {
        return (<p>Review: {review.content} Rating: {review.rating}</p>)
    })

    return(
        <div>
            {showDetails ? 
            <div onClick={handleShowDetails} className="detail-div">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Genre: {book.genre}</p>
                <p>Page Count: {book.page_count}</p>
                <p>{reviewMap}</p>

            </div> :
            <div onClick={handleShowDetails} className="list-div">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
            </div>}
        </div>
    )

}

export default BookListItem;