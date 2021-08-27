import CurrentUserDropdown from './CurrentUserDropdown';
import { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm';
import UserBookList from './UserBookList';

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


	return(
		<Fragment>
			{Object.keys(currentUser).length === 0 ?
			<div>
				<h1>Welcome!</h1>
	            <div className="form-div">
					<h2>Login As:</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</div>
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
						<UserBookList currentUser={currentUser} />
						{/* {books} */}
					</div>
				</div>
				<div className="dropdown-div">
					<h2>Select a Different User</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</div>
			</div>
			}
		</Fragment>
	)
}

export default HomePage