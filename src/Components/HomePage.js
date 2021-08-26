import CurrentUserDropdown from './CurrentUserDropdown';
import { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm';

function HomePage({ users, setUsers, currentUser, setCurrentUser }) {

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

	function passSetUsers(newUser) {
		setUsers([newUser, ...users])
	}

	let books = <h3>Loading...</h3>
	if (Object.keys(currentUser).length > 0) {
		books = currentUser.reviews.map((review) => {
			const date = parseInt(review.updated_at.slice(0, 10))
			const timeNow = new Date().getTime() / 1000
			const timeDiff = parseInt((timeNow - review.updated_at))
			const timeDisplayHours = parseInt(timeDiff/3600)
			const timeDisplayDays = parseInt(timeDiff/(3600 * 24))

			console.log(review.updated_at)

			const timeToDisplay = () => {
				if (timeDiff < 3600) {
					return('just now')
				} else if (timeDiff < 7200) {
					return(`${timeDisplayHours} hour ago`)
				} else if (timeDiff < 86400) {
					return(`${timeDisplayHours} hours ago`)
				} else if (timeDiff < 172800) {
					return(`${timeDisplayDays} day ago`)
				} else {
					return(`${timeDisplayDays} days ago`)
				}
			}
		})
	}

	return(
		<Fragment>
			{Object.keys(currentUser).length === 0 ?
			<div>
				<h1>Welcome!</h1>
	            <form className="form-div">
					<h2>Login As:</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</form>
				<h2></h2>
				<div>
					<AddUserForm passSetUsers={passSetUsers} setCurrentUser={setCurrentUser} />
				</div>
			</div>
			:
			<div>
				<h1>Welcome, {currentUser.name}!</h1>
				<div className = "homepage-reviews">
					<div className = "pfp">
					<img src = {currentUser.pfp} alt="profile-pic"  width="150px" height="150px"></img>
					<p style={{fontSize: "10px"}}>change you profile picture</p>
					<form onSubmit={handleSubmit}>
						<input type="text" placeholder="enter url here" onChange = {handleChangePfp} value = {pfp}></input>
					<input type="submit" className="submit-input" value="Submit" />
					</form>
					<p>Birthday: {currentUser.birthday}</p>
					<p>XP: {currentUser.xp}</p>
					<p>level: {Math.ceil(currentUser.xp/300)}</p>
					</div>
					<div className = "books-read">
						<h3>Books I've Read</h3>
						{books}
					</div>
				</div>
				<form className="form-div">
					<h2>Select a Different User</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</form>
			</div>
			}
		</Fragment>
	)
}


export default HomePage