import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

function UserListItem({ user }){
    // const id = useParams()
    const reviewMap = user.reviews.map((review) => {
        return (<p>Book: {review.book_id} Review: {review.content} Rating: {review.rating}</p>)
    })

    let history = useHistory();

    function handleShowDetails(){
        history.push(`/users/${user.id}`)        
    }

    return(
        <div>
            <div className="detail-div" onClick = {handleShowDetails}>
                <p>Name: {user.name}</p>
            </div> 
        </div>
    )

}

export default UserListItem;