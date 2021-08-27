
function UserBookListItem({ review }) {
	const date = Date.parse(review.updated_at)
	const timeNow = new Date().getTime() 
	const timeDiff = parseInt((timeNow - date)/1000)
	const timeDisplayHours = parseInt(timeDiff/3600)
	const timeDisplayDays = parseInt(timeDiff/(3600 * 24))
	const timeDisplayMonths = parseInt(timeDiff/(3600 * 24 * 30))
	const timeDisplayYears = parseInt(timeDiff/(3600 * 24 * 365))

	// console.log(review.updated_at, "date:", date, "timeNow", timeNow, "timeDiff", timeDiff, "timeDisplayHours", timeDisplayHours)

	const timeToDisplay = () => {
		if (timeDiff < 3600) {
			return('just now')
		} else if (timeDiff < 7200) {
			return(`${timeDisplayHours} hour ago`)
		} else if (timeDiff < 86400) {
			return(`${timeDisplayHours} hours ago`)
		} else if (timeDiff < 172800) {
			return(`${timeDisplayDays} day ago`)
		} else if (timeDiff < 5256000) {
			return(`${timeDisplayDays} days ago`)
		} else if (timeDiff < 31536000) {
			return(`${timeDisplayMonths} months ago`)
		} else if (timeDiff < 63072000) {
			return("1 year ago")
		} else {
			return(`${timeDisplayYears} years ago`)
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