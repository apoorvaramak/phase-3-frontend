import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail({ users, books, setBooks, setIsClickedBook, currentUser, setCurrentUser }){
    const [addReviewFormData, setAddReviewFormData] = useState({
        content: "",
        rating: "",
        book_id: parseInt(useParams().id),
        user_id: parseInt(currentUser.id),
        id: null
    })

    const id = useParams().id
    const book = books.find(element => element.id == id)

    const [isEditReview, setIsEditReview] = useState(false)
    const [reviews, setReviews] = useState(book.reviews)

    const realReviews = reviews.filter((review) => review.rating > 0 || review.content.length > 0 )

    const reviewMap = realReviews.map((review) => {
        let num = review.rating;
        let stars = '';
        while(num > 0){
            stars += "⭐";
            num -= 1;
        }

        let reviewUser = users.find (user => user.id === review.user_id)

        return (
            <div className = "reviews" key = {review.id}>
                <p>Rating from: {reviewUser.name}</p> 
                <p>Review: {review.content}</p>
                <p>Rating: {stars}</p>

                {review.user_id === currentUser.id ? 
                <>
                    <button name={review.id} className="submit-input" onClick={onEditReviewClick}>Edit Review</button> 
                    <button name ={review.id} className="submit-input" onClick ={deleteReview}>Delete Review</button>
                </>
                : null}
            </div> 
        )
    })


    function handleClick(){
        setIsClickedBook(false)
    }

    function deleteReview(event){
        event.preventDefault()
        console.log(event)
        fetch(`${process.env.REACT_APP_API_URL}/reviews/${event.target.name}`, {
            method: 'DELETE',
            headers: { 
                Accept: 'application/json',
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const deleteBooks = reviews.filter((review) => review.id !== data.id)
            console.log(deleteBooks)
            setReviews(deleteBooks)
        })
    }

    function manageReviewFormData(e) {
        let key = e.target.name
        let value = e.target.value
        setAddReviewFormData({
            ...addReviewFormData,
            [key]: value,
        })
    }

    //for PATCH, splices out old version of review then adds edited version, then to next step for POST splices out old version of BOOK and adds newly reviewed book
    function onSubmit(e){
        e.preventDefault()
        if (!isEditReview) {
            fetch(`${process.env.REACT_APP_API_URL}/reviews/add`, {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(addReviewFormData)
            })
            .then(response => response.json())
            .then(data => {
                setReviews(previousReviews => [data, ...previousReviews])
                setCurrentUser({
                    ...currentUser,
                    xp: currentUser.xp + data.book.page_count
                })
                setAddReviewFormData({  
                    content: "",
                    rating: "",
                    book_id: book.id,
                    user_id: currentUser.id,
                    id: null
                })
            }) 
        } else {
            console.log('patch')
            fetch(`${process.env.REACT_APP_API_URL}/reviews/${addReviewFormData.id}`, {
                method: "PATCH",
                header: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(addReviewFormData)
            })
            .then(response => response.json())
            .then(editedReviewData => {
                setIsEditReview(false)
                let reviewId = reviews.findIndex(oneReview => oneReview.id === editedReviewData.id)
                reviews[reviewId] = editedReviewData
                setReviews(reviews)
                setAddReviewFormData({   
                    content: "",
                    rating: "",
                    book_id: book.id,
                    user_id: currentUser.id,
                    id: null
                })
            }) 
        }
    }

    function onEditReviewClick(e){
        e.preventDefault()
        setIsEditReview(true)
        let id = parseInt(e.target.name)
        let review = reviews.find(rev => rev.id == id)
        setAddReviewFormData({
            ...review,
            id
        })
    }

    return(
        <div>
            <div className="detail-div">
                <p><b>Title:</b> {book.title}</p>
                <p><b>Author:</b> {book.author}</p>
                <p><b>Publisher:</b> {book.publisher}</p>
                <p><b>Genre:</b> {book.genre}</p>
                <p><b>Page Count:</b> {book.page_count}</p>
                <div>{reviewMap}</div>
                {Object.keys(currentUser).length === 0 ?
                <h3>Please select a user to add a review</h3> :
                <>
                <h3>Add a Review</h3>
                    <form className = "form-div" onSubmit={onSubmit}>
                        <label htmlFor="rating">Rating(1-5): </label>
                        <input onChange={manageReviewFormData} value={addReviewFormData.rating} type="number" id="rating" name="rating" min="1" max="5" placeholder="1-5"/>
                        <label htmlFor="content">Review:</label>
                        <input onChange={manageReviewFormData} value={addReviewFormData.content} type="textarea" id="content" name="content" placeholder="add review..."/>
                        <button type="submit" className="submit-input">Submit</button>
                    </form>
                </>}
                <button className="link-button-class">
                <Link to="/books" onClick={handleClick} style={{ textDecoration: 'none', color: 'slateblue'  }}>Go back</Link>
                </button>
            </div>
        </div>
    )

}

export default BookDetail;