import CurrentUserDropdown from './CurrentUserDropdown';
import {useState} from 'react'
import AddUserForm from './AddUserForm';

function HomePage({ users, setUsers, currentUser, setCurrentUser }) {
	console.log(currentUser)
	const [pfp, setPfp] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		updateUser()
		console.log("clicked")
	}

	function handleChangePfp(event){
		setPfp(event.target.value)
	}

	function updatePfp(data){
		console.log("1", data)
			const updatedUser = {
				birthday: currentUser.birthday,
				id: currentUser.id,
				name: currentUser.name,
				pfp: data.pfp,
				reviews: currentUser.reviews,
				xp: currentUser.xp
			}
			console.log("2", updatedUser)
			setCurrentUser(updatedUser)
			console.log("3", currentUser)
			setPfp("")
	}

	function updateUser(){
		// console.log(pfp)
		fetch(`${process.env.REACT_APP_API_URL}/users/${currentUser.id}`, {
			method: "PATCH",
			headers:{'Content-type': 'application/json'},
			body: JSON.stringify({
				pfp: pfp,
			})
		}).then(response => response.json())
		.then(data => updatePfp(data))
		// setCurrentUser(updatedUser)
	}

	if (Object.keys(currentUser).length === 0) {
		return(
			<div>
				<h1>Welcome!</h1>
	            <form className="form-div">
					<h2>Login As:</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</form>
				{/* <h1>Or add a new user:</h1> */}
				<h2></h2>
				<div>
					<AddUserForm users={users} setUsers={setUsers} setCurrentUser={setCurrentUser} />
				</div>
			</div>
		)
	} else { 
		const books = currentUser.reviews.map((review) => {
			console.log(review)
			const date = review.updated_at.slice(0, 10)
			return (
				<div className = "the-reviews" key = {review.id}>
					<h4>{review.book.title} by {review.book.author}</h4>
					<p><b>Review:</b> {review.content}</p>
					<p style={{fontSize: 10}}>({date})</p>
				</div>
			)
		})
		return(
			<div>
				<h1>Welcome, {currentUser.name}!</h1>
				<form className="form-div">
					<h2>Select a Different User</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</form>
				<div className = "homepage-reviews">
					<div className = "pfp">
					<img src = {currentUser.pfp} alt="profile-pic"  width="150px" height="150px"></img>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="enter url here" onChange = {handleChangePfp} value = {pfp}></input>
					<input type="submit" value="Submit" />
					</form>
					</div>
					<div className = "books-read">
						<h3>Books I've Read</h3>
						{books}
					</div>
				</div>
			</div>
		)
	}
}

export default HomePage