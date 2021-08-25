import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function BookDetail({books, setBooks, setIsClickedBook}){
    //form set up for reviews no user_id do we want to keep or hardcode a user_id?
    const [addReviewFormData, setAddReviewFormData] = useState({
        content: "",
        rating: "",
        book_id: parseInt(useParams().id),
        id: null
    })
   
    const [isEditReview, setIsEditReview] = useState(false)
   
    const id = useParams().id

    const book = books.find(element => element.id == id)

    const reviewMap = book.reviews.map((review) => {
        return (
            <div>
                <p key={review.id}>Review: {review.content} Rating: {review.rating}</p>
                <button name={review.id} onClick={onEditReviewClick}>Edit Review</button>
            </div>
        )
    })

    function handleClick(){
        setIsClickedBook(false)
    }

    function manageReviewFormData(e) {
        let key = e.target.name
        let value = e.target.value
        setAddReviewFormData({
            ...addReviewFormData,
            [key]: value
        })
    }

    //this post and patch do not provide user_id foreign key but otherwise work
    //for PATCH, splices out old version of review then adds edited version, then to next step for POST splices out old version of BOOK and adds newly reviewed book
    function onSubmit(e){
        e.preventDefault()
        if (!isEditReview) {
            console.log('post')
            debugger
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
                book.reviews.push(data)
                let index = books.findIndex(oneBook => oneBook.id === book.id)
                setBooks([book, ...books])
                setAddReviewFormData({   
                    content: "",
                    rating: "",
                    book_id: book.id,
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
                let reviewId = book.reviews.findIndex(oneReview => oneReview.id === editedReviewData.id)
                book.reviews[reviewId] = editedReviewData
                let index = books.findIndex(oneBook => oneBook.id === book.id)
                books[index] = book
                setBooks([book, ...books])
                setAddReviewFormData({   
                    content: "",
                    rating: "",
                    book_id: book.id,
                    id: null
                })
            }) 
        }
    }

    function onEditReviewClick(e){
        e.preventDefault()
        setIsEditReview(true)
        let id = parseInt(e.target.name)
        let review = book.reviews.find(rev => rev.id == id)
        setAddReviewFormData({
            ...review,
            id
        })
    }

    return(
        <div>
            <div className="detail-div">
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Publisher: {book.publisher}</p>
                <p>Genre: {book.genre}</p>
                <p>Page Count: {book.page_count}</p>
                <div>{reviewMap}</div>
                <h3>Add a Review</h3>
                <form onSubmit={onSubmit}>
                    <label htmlFor="rating">Rating(1-5): </label>
                    <input onChange={manageReviewFormData} value={addReviewFormData.rating} type="number" name="rating" min="1" max="5" placeholder="1-5"/>
                    <label htmlFor="content">Review:</label>
                    <input onChange={manageReviewFormData} value={addReviewFormData.content} type="text" name="content" placeholder="add review..."/>
                    <button type="submit">Submit</button>
                </form>
                <Link to="/books" onClick={handleClick} >Go back</Link>
            </div>
        </div>
    )

}

export default BookDetail;