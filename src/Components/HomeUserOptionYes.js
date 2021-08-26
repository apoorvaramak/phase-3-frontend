import { Fragment } from "react"

function HomeUserOptionYes({ user, currentUser }) {
	
	return (
		<Fragment>
		{currentUser.id === user.id ? 
			<option value={user.id} selected >{user.name}</option>
		:
			<option value={user.id}>{user.name}</option>
		}
		</Fragment>
	)
}

export default HomeUserOptionYes