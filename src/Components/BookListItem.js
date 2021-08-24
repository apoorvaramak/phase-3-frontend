import { useState } from 'react';
import { Route, Switch, useHistory, useParams, Link } from 'react-router-dom';
import BookDetail from './BookDetail.js'

function BookListItem({book}){
    const [showDetails, setShowDetails] = useState(false)

    let history = useHistory();

    function handleShowDetails(){
        setShowDetails(!showDetails);
        history.push(`/books/${book.id}`)        
    }
    // const reviewMap = book.reviews.map((review) => {
    //     return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    // })
    // const slug = `/books/${book.id}`
    //this works to show all info we want, but we want the "detail-div" to be its own page with its own url - ?params? 
    return(
        <div>
            <div onClick={handleShowDetails} className="list-div">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
            </div>
        </div>
    )

}

export default BookListItem;