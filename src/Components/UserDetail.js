import { Route, Switch, useHistory, useParams, Link } from 'react-router-dom';
function UserDetail({users}){
    console.log("hi")

    const id = useParams().id
    console.log(id)

    const user = users.find(element => element.id == id)

    let history = useHistory();

    function goBack(){
        history.push(`/users`)        
    }

    const reviewMap = user.reviews.map((review) => {
        return (<p key={review.id}>Review: {review.content} Rating: {review.rating}</p>)
    })
    //this works to show all info we want, but we want the "detail-div" to be its own page with its own url - ?params? 
    return(
        <div>
            <div className="detail-div">
                <p>Name: {user.name}</p>
                <p>Birthday: {user.birthday}</p>
                <p>XP: {user.xp}</p>
                <p>Level: {Math.ceil(user.xp/300)}</p>
                <div>{reviewMap}</div>
                <Link to="/users">Go back</Link>
            </div>
        </div>
    )

}

export default UserDetail;