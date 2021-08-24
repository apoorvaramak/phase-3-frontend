import { useState } from 'react';
import { Route, Switch, useHistory, useParams, Link } from 'react-router-dom';
import BookDetail from './BookDetail.js'

function BookListItem({book, setIsClickedBook }){
    const [showDetails, setShowDetails] = useState(false)

    // let history = useHistory();

    // function handleShowDetails(){
    //     setShowDetails(!showDetails);
    //     history.push(`/books/${book.id}`)        
    // }

    function handleClick(){
        setIsClickedBook(true)
    }
    // const reviewMap = book.reviews.map((review) => {
    //     return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    // })
    // const slug = `/books/${book.id}`
    //this works to show all info we want, but we want the "detail-div" to be its own page with its own url - ?params? 
    return(
        <div>
            <div className="list-div">
                <p><Link to={`/books/${book.id}`} onClick={handleClick} >Title: {book.title}</Link></p>
                <p>Author: {book.author}</p>
            </div>
        </div>
    )

}

export default BookListItem;