import { useState } from 'react';
import HomeUserOption from './HomeUserOption';

function HomePage({ users, currentUser, setCurrentUser }) {
	// const [chosenUser, setChosenUser] = useState({})
	// const [selectedUser, setSelectedUser] = useState({})

	const userOptions = users.map(user => <HomeUserOption user={user} />)

	const handleChange = (e) => {
		const selectedUser = users.find(user => user.id == e.target.value)
		setCurrentUser(selectedUser)
		console.log("Homepage/handleChange", e.target.value, selectedUser)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e)
	}

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
			</div>
		)
	}
}

export default HomePage