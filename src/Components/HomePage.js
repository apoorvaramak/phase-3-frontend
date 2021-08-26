import { useState } from 'react';
import HomeUserOption from './HomeUserOption';

function HomePage({ users, currentUser, setCurrentUser }) {
	// const [chosenUser, setChosenUser] = useState({})
	// const [selectedUser, setSelectedUser] = useState({})
	const [pfp, setPfp] = useState("")
	// console.log(currentUser)
	// console.log(9, pfp)
	// console.log(currentUser.pfp)

	const userOptions = users.map(user => <HomeUserOption key = {user.id} user={user} />)

	const handleChange = (e) => {
		const selectedUser = users.find(user => user.id == e.target.value)
		setCurrentUser(selectedUser)
		// console.log("Homepage/handleChange", e.target.value, selectedUser)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		updateUser()
		console.log("clicked")
		// console.log(e)
	}

	function handleChangePfp(event){
		// console.log(event.target.value)
		// console.log(event.target.value)
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
	// console.log(currentUser)

	if (Object.keys(currentUser).length === 0) {
		return(
			<div>
				<h1>Welcome! Please select a User!</h1>
				<form onSubmit={handleSubmit}>
					<select onChange={handleChange} >
						{userOptions}
					</select>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	} else { 
		const books = currentUser.reviews.map((review) => {
			return (<p key = {review.id}>{review.book.title} by {review.book.author}</p>)
		})
		return(
			<div>
				<h1>Welcome, {currentUser.name}!</h1>
				<form onSubmit={handleSubmit}>
					<label>
						Select a New User:<span> </span> 
					<select onChange={handleChange} >
						{userOptions}
					</select>
					</label>
					<span> </span>
					<input type="submit" value="Submit" />
				</form>
				<div>
					<img src = {currentUser.pfp} alt="profile-pic"  width="150px" height="150px"></img>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="enter url here" onChange = {handleChangePfp} value = {pfp}></input>
					<input type="submit" value="Submit" />
					<h3>Books I've Read</h3>
					{books}
				</form>
				</div>
			</div>
		)
	}
}

export default HomePage