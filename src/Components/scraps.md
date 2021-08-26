import { useHistory } from "react-router-dom"

{/* <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}


BookContainer
        // <Switch>
            {/* <Route path={`${match.url}/:id`}>
                <BookDetail books={books}/>
            </Route> */}
            // <Route exact path={match.url}>
                <BookList books={books} setBooks={setBooks}  setIsClickedBook={setIsClickedBook} isClickedBook={isClickedBook} />
            // </Route>
            {/* <Route exact path="/books/add">
                <AddBookForm books={books} setBooks={setBooks} />
            </Route> */}
            {/* <Route exact path="/books/:id/edit">
                <EditBookInfo 
                books={books} 
                book={books.find((book) => book.id === parseInt(match.params.id))}
                setBooks={setBooks} />
            </Route> */}
        // </Switch>
    

App.js fetch with async/await
  // const [users, setUsers] = useState([])
  //fetch based on dogwalk trying to get the fetch to wait for load (will get user on second pause press)
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const res = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
  //       headers: { Accept: 'application/json' }
  //     });
  //     const parsedBody = await res.json();
  //     setUsers(parsedBody);
  //   }
  //   fetchUsers();
  // }, []);
  app.js other planned routes not functioning now
            {/* <Route
            exact path="/users/:id"
            render={({ match }) => 
            {let user = users.find((user) => {
              return user.id === parseInt(match.params.id)})
              console.log(users)
            return ( 
              <UserListItem
                user={user}
                // {users.find((user) => {
                //   return user.id === parseInt(match.params.id)})}
              />
            )}
            }/> */}

BookDetail goBack function with useHistory, in UserDetail just /users
// let history = useHistory();
// function goBack(){
//   history.push(`/books`)        
// }

Scraps from the review post and patch
from post
// books.splice(index, 1); 
from patch          
// books.splice(index, 1);      
// book.reviews.splice(reviewId, 1)
// book.reviews.push(editedReviewData)
from right under the onSubmit to see what data comes through
// console.log(JSON.stringify(addReviewFormData))


BookDetail 25ish
                {/* <p key={review.id}>User: {review.user.name} Review: {review.content} Rating: {review.rating}</p> */}



HOMEPAGE REPLACED BY RETURN FRAGMENT TERNARY
	if (Object.keys(currentUser).length === 0) {
		return(
			<div>
				<h1>Welcome!</h1>
	            <form className="form-div">
					<h2>Login As:</h2>
					<CurrentUserDropdown users={users} currentUser={currentUser} setCurrentUser={setCurrentUser} />
				</form>
				{/* <h1>Or add a new user:</h1> */}
				<h2></h2>
				<div>
					<AddUserForm passSetUsers={passSetUsers} setCurrentUser={setCurrentUser} />
				</div>
			</div>
		)
	} else { 
		const books = currentUser.reviews.map((review) => {
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
					<p style={{fontSize: 10}}>({timeToDisplay})</p>
				</div>
			)
		})
		return(
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
		)
	}
}