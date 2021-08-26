
function UserBookListItem({ review }) {
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
		
	return (
		<div className = "the-reviews" key = {review.id}>
			<h4><i>{review.book.title}</i> by {review.book.author}</h4>
			<p><b>Review:</b> {review.content}</p>
			<p style={{fontSize: 10}}>({timeToDisplay()})</p>
		</div>
	)
}

export default UserBookListItem