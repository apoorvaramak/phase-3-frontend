import HomeUserOption from './HomeUserOption';
import { Fragment } from "react"

function CurrentUserDropdown({ users, currentUser, setCurrentUser }) {
	const userOptions = users.map(user => <HomeUserOption key={user.id} user={user} />)

	const handleChange = (e) => {
		const selectedUser = users.find(user => user.id == e.target.value)
		setCurrentUser(selectedUser)
	}

	let defaultID = 0
	if (Object.keys(currentUser).length > 0) {
		defaultID = currentUser.id
	} 

	return (
		<Fragment>
			{Object.keys(currentUser).length === 0 ?
				<select onChange={handleChange} defaultValue="" >
					<option value="" disabled hidden>please select a user</option>
					{userOptions}
				</select>
			:
				<select onChange={handleChange} value={defaultID}>
					{userOptions}
				</select>
			}
		</Fragment>

	)
}

export default CurrentUserDropdown