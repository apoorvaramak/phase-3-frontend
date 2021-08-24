import { findAllByTestId } from '@testing-library/react';
import { Route, Switch, useHistory, useParams, Link } from 'react-router-dom';
function BookDetail({books, setIsClickedBook}){
    console.log("hi")

    const id = useParams().id
    console.log(books)
    console.log(id)

    const book = books.find(element => element.id == id)

    let history = useHistory();

    function goBack(){
        history.push(`/books`)        
    }

    const reviewMap = book.reviews.map((review) => {
        return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    })

    function handleClick(){
        setIsClickedBook(false)
    }

    function onSubmit(){
        // fetch(`${process.env.REACT_APP_API_URL}/books`, {
        //     method: "POST",
        //     header: {
        //         "Content-Type": "application/json"
        //     }
        //     body: {

        //     }, 
        // })
        // .then(response => response.json())
        // .then(data => console.log(data))
    // }
    }
    //this works to show all info we want, but we want the "detail-div" to be its own page with its own url - ?params? 
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
                    <input type="number" placeholder="rate 1 to 5"/>
                    <input type="text" placeholder="add review..."/>
                    <button type="submit">Submit</button>
                </form>
                <Link to="/books" onClick={handleClick} >Go back</Link>
            </div>
        </div>
    )

}

export default BookDetail;