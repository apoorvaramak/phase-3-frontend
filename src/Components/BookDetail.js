import { Route, Switch, useHistory, useParams, Link } from 'react-router-dom';
function BookDetail({books}){
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
                <Link to="/books">Go back</Link>
            </div>
        </div>
    )

}

export default BookDetail;