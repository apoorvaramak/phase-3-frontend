// import { useState } from 'react';
import { Link } from 'react-router-dom';

function BookListItem({book, setIsClickedBook }){
    // const [showDetails, setShowDetails] = useState(false)

    // let history = useHistory();

    // function handleShowDetails(){
    //     setShowDetails(!showDetails);
    //     history.push(`/books/${book.id}`)        
    // }

    // const reviewMap = book.reviews.map((review) => {
    //     return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    // })
    // const slug = `/books/${book.id}`

    function handleClick(){
        setIsClickedBook(true)
    }
    
    return(
        <div>
            <div className="list-div">
                <p><Link to={`/books/${book.id}`} onClick={handleClick} ><b>Title:</b> {book.title}</Link></p>
                <p><b>Author:</b> {book.author}</p>
            </div>
        </div>
    )

}

export default BookListItem;