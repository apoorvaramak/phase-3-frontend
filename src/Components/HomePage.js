import { Fragment } from "react"
import CurrentUserDropdown from './CurrentUserDropdown';

function HomePage({ users, currentUser, setCurrentUser }) {

	return (
		<Fragment>
			{Object.keys(currentUser).length === 0 ?
				<div>
					<h1>Welcome! Please select a user!</h1>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</div> : <div>
					<h1>Welcome, {currentUser.name}!</h1>
					<h3>Select a different user:</h3>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</div>}
		</Fragment>
	)
}

export default HomePage