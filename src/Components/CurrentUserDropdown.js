import HomeUserOptionNo from './HomeUserOptionNo';
import HomeUserOptionYes from './HomeUserOptionYes';
import { Fragment } from "react"

function CurrentUserDropdown({ users, currentUser, setCurrentUser }) {
	const userOptionsNo = users.map(user => <HomeUserOptionNo key={user.id} user={user} />)

	const userOptionsYes = users.map(user => <HomeUserOptionYes key={user.id} user={user} currentUser={currentUser} />)

	const handleChange = (e) => {
		const selectedUser = users.find(user => user.id == e.target.value)
		setCurrentUser(selectedUser)
	}

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	console.log(e)
	// }

	return (
		<Fragment>
			{Object.keys(currentUser).length > 0 ?
				<select onChange={handleChange} defaultValue={currentUser.id}>
					{userOptionsYes}
				</select>
			:
				<select onChange={handleChange} defaultValue="" >
					<option value="" disabled hidden>please select a user</option>
					{userOptionsNo}
				</select>
			}
		</Fragment>

	)
}

export default CurrentUserDropdown