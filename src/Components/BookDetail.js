import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail({ users, books, setBooks, setIsClickedBook, currentUser }){
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

    const reviewMap = reviews.map((review) => {
        let num = review.rating;
        let stars = '';
        while(num > 0){
            stars += "⭐";
            num -= 1;
        }

        let reviewUser = users.find (user => user.id === review.user_id)

        return (
            <div className = "reviews" key = {review.id}>
            <p>Rating from: {reviewUser.name} Review: {review.content} Rating: {stars}</p>
            {review.user_id === currentUser.id ? <button name={review.id} onClick={onEditReviewClick}>Edit Review</button> : null}
            {review.user_id === currentUser.id ? <button name ={review.id} onClick ={deleteReview}>Delete Review</button> : null}  
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
        // const deleteBooks = book.reviews.filter((review) => review.id !== event.target.name)
        // let index = books.findIndex(oneBook => oneBook.id === book.id)
        // .then(response => response.json())
        // .then(data => books.reviews.filter((review) => review.id !== data.id))
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
            console.log('post', addReviewFormData)
            console.log(currentUser.id)
            // const aaaaWork = [addReviewFormData, ...reviews]
            // console.log("aaaaWork", aaaaWork)
            // setReviews(aaaaWork)
            // console.log("After setReviews", reviews)
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
                console.log('AddReview response data:', data)
                // reviews.push(data)
                // let index = books.findIndex(oneBook => oneBook.id === book.id)
                // const aaaaHelp = [data, ...reviews]
                // console.log("aaaaHelp", aaaaHelp)
                setReviews(previousReviews => [data, ...previousReviews])
                console.log("did we get this far? Reviews:", reviews)
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
                // let index = books.findIndex(oneBook => oneBook.id === book.id)
                // books[index] = book
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
                <h3>Add a Review</h3>
                {Object.keys(currentUser).length === 0 ?
                    <h3>Please select a user</h3> :
                    <form className = "form-div" onSubmit={onSubmit}>
                    <label htmlFor="rating">Rating(1-5): </label>
                    <input onChange={manageReviewFormData} value={addReviewFormData.rating} type="number" name="rating" min="1" max="5" placeholder="1-5"/>
                    <label htmlFor="content">Review:</label>
                    <input onChange={manageReviewFormData} value={addReviewFormData.content} type="text" name="content" placeholder="add review..."/>
                    <button type="submit">Submit</button>
                </form>}
                <button>
                <Link to="/books" onClick={handleClick} >Go back</Link>
                </button>
            </div>
        </div>
    )

}

export default BookDetail;