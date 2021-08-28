import { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UserBookListItem from './UserBookListItem'


function UserBookList({ currentUser, currentUserReviews }) {
	// const realReviews = currentUser.reviews.filter((review) => review.rating > 0 || review.content.length > 0 )
	
	const userBooks = currentUserReviews.map((review) => 
			<UserBookListItem key={review.id} review={review} />
		)
	// useEffect(() => {
	// 	userBooks = currentUser.reviews.map((review) => 
	// 		<UserBookListItem key={review.id} review={review} />
	// 	)
	// }, [isUpdatedReviews, currentUser])

	return (
		<Fragment>
			{currentUser.reviews.length === 0 ? 
				<div>
					You haven't added any books yet.
					<br />
					<Link to="/books"style={{ textDecoration: 'none', color: 'slateblue' }} >Find some books to add!</Link>	
				</div>
			:
				<div>
					{userBooks}
				</div>
			}
		</Fragment>
	)
	
}

export default UserBookList