import { useParams, Link } from 'react-router-dom';

function UserDetail({users, setIsClickedUser }){
    console.log("hi from UserDetail", users)

    const id = useParams().id
    console.log(id)

    const user = users.find(element => element.id == id)
    console.log(user)

    const reviewMap = user.reviews.map((review) => {
        return (<p key={review.id}>Book: {review.book.title} Review: {review.content} Rating: {review.rating}</p>)
    })
    
    function handleClick(){
        setIsClickedUser(false)
    }
    return(
        <div>
            <div className="detail-div">
                <p>Name: {user.name}</p>
                <img src={user.pfp} />
                <p>Birthday: {user.birthday}</p>
                <p>XP: {user.xp}</p>
                <p>Level: {Math.ceil(user.xp/300)}</p>
                <div>{reviewMap}</div>
                <button className="link-button-class" >
                <Link to="/users" onClick={handleClick} style={{ textDecoration: 'none' }}>Go back</Link>
                </button>
            </div>
        </div>
    )

}

export default UserDetail;