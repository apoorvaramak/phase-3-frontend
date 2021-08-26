import { useParams, Link } from 'react-router-dom';

function UserDetail({users, setIsClickedUser }){
    console.log("hi from UserDetail", users)

    const id = useParams().id
    console.log(id)

    const user = users.find(element => element.id == id)
    console.log(user)

    const reviewMap = user.reviews.map((review) => {
        return (
            <div className = "reviews" key={review.id}>
                <p>Book: {review.book.title}</p>
                <p>Review: {review.content} </p> 
                <p>Rating: {review.rating}</p>
            </div>
        )
    })
    
    function handleClick(){
        setIsClickedUser(false)
    }
    return(
        <div>
            <div className="detail-div">
                <p>Name: {user.name}</p>
                <img src={user.pfp} alt="profile-pic" width="150px" height="150px" />
                <p>Birthday: {user.birthday}</p>
                <p>XP: {user.xp}</p>
                <p>Level: {Math.ceil(user.xp/300)}</p>
                <div>{reviewMap}</div>
                <button className="link-button-class" >
                    <Link to="/users" onClick={handleClick} style={{ textDecoration: 'none', color: 'slateblue' }}>Go back</Link>
                </button>
            </div>
        </div>
    )

}

export default UserDetail;