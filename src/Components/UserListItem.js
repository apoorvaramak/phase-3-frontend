// import { useState } from 'react';
import { Link } from 'react-router-dom';

function UserListItem({ user, users, setIsClickedUser }){
    // const params = useParams()

    // const reviewMap = user.reviews.map((review) => {
    //     return (<p>Book: {review.book_id} Review: {review.content} Rating: {review.rating}</p>)
    // })

    // let history = useHistory();

    // function handleShowDetails(){
    //     history.push(`/users/${user.id}`)        
    // }

    function handleClick(){
        setIsClickedUser(true)
    }
    return(
        <div>
            {/* <div className="detail-div" onClick = {handleShowDetails}> */}
            <div className="detail-div" >
                <p><Link to={`/users/${user.id}`} onClick={handleClick}>Name: {user.name}</Link></p>
            </div> 
            {/* <Route path="/users/:id">
                <UserDetail key={params.id} user={user}/>
            </Route> */}

        </div>
    )

}

export default UserListItem;