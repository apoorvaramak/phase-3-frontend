import { useState } from 'react';
import { Route, Switch, useParams, Link } from 'react-router-dom';

function BookDetail({books, setIsClickedBook}){
    //form set up for reviews no user_id do we want to keep or forge
    const [addReviewFormData, setAddReviewFormData] = useState({
        content: "",
        rating: "",
        book_id: parseInt(useParams().id)
    })
    function manageReviewFormData(e) {
        let key = e.target.name
        let value = e.target.value
        setAddReviewFormData({
            ...addReviewFormData,
            [key]: value
        })
    }

    const id = useParams().id
    // console.log(books)
    // console.log(id)

    const book = books.find(element => element.id == id)

    const reviewMap = book.reviews.map((review) => {
        return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    })

    function handleClick(){
        setIsClickedBook(false)
    }
    //working on review add form but need to parse request body and set up endpoint this post does not provide user foreign key
    function onSubmit(e){
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/reviews/add`, {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(addReviewFormData)
        })
        .then(response => response.json())
        .then(data => console.log(data))
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