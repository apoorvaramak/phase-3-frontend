import { useState } from 'react';
import { useParams } from 'react-router-dom';

function UserListItem({ user }){
    // const id = useParams()
    const reviewMap = user.reviews.map((review) => {
        return (<p>Book: {review.book_id} Review: {review.content} Rating: {review.rating}</p>)
    })

    return(
        <div>
            <div className="detail-div">
                <p>Name: {user.name}</p>
                <p>Birthday: {user.birthday}</p>
                <p>XP: {user.xp}</p>
                <p>Level: {user.xp}</p>
                <p>{reviewMap}</p>
            </div> 
        </div>
    )

}

export default UserListItem;