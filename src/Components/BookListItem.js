import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function BookListItem({book, setIsClickedBook, currentUser, setCurrentUser, setCurrentUserReviews }){
    
    const [reviews, setReviews] = useState(book.reviews)

    let history = useHistory()
    
    const isBookCurrentUsers = reviews.find(review => review.user_id === currentUser.id)
    // console.log("BookListItem", isBookCurrentUsers)
    
    function handleClick(){
        setIsClickedBook(true)
    }
    
    function handleAddClick(e){
        fetch(`${process.env.REACT_APP_API_URL}/reviews/add`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                content: "",
                rating: "",
                book_id: book.id,
                user_id: e.target.value,
                id: null                
            })
        })
        .then(response => response.json())
        .then(data => {
            setReviews(previousReviews => [data, ...previousReviews])
            setCurrentUser({
                ...currentUser,
                xp: currentUser.xp + data.book.page_count
            })
            setCurrentUserReviews((prevRev) => [...prevRev, data])
            history.push("/books")
        }) 
    }

    return(
        <div>
            <div className="list-div">
                <p><b>Title: <em><Link to={`/books/${book.id}`} onClick={handleClick} style={{ textDecoration: 'none', color: 'slateblue' }}>{book.title}</Link></em></b></p>
                <p><b>Author:</b> {book.author}</p>
                {!isBookCurrentUsers && Object.keys(currentUser).length > 0 ? <button className="submit-input" onClick={handleAddClick} value={currentUser.id} >Add to My Books</button> : null }
            </div>
        </div>
    )

}

export default BookListItem;