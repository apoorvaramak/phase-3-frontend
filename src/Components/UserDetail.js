import { useParams, Link } from 'react-router-dom';

function UserDetail({users, setIsClickedUser }){

    const id = useParams().id

    const user = users.find(element => element.id == id)

    const reviewMap = user.reviews.map((review) => {
        return (
            <div className = "reviews" key={review.id}>
                <p><b><em>{review.book.title}</em></b> by <b>{review.book.author}</b></p>
                <p>Review: {review.content} </p> 
                <p>Rating: {review.rating}</p>
            </div>
        )
    })
    
    function handleClick(){
        setIsClickedUser(false)
    }

    
    let msec = Date.parse(user.birthday)
    let renderBirthdayDate = new Date(msec)
    let monthDay = renderBirthdayDate.toDateString().slice(4, 10)
    let yearYear = renderBirthdayDate.toDateString().slice(11)
    let renderBirthday = `${monthDay}, ${yearYear}`
	

    return(
        <div>
            <div className="detail-div">
                <h1>{user.name}</h1>
                <img src={user.pfp} alt="profile-pic" width="150px" height="150px" />
                <p>Birthday: {renderBirthday}</p>
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