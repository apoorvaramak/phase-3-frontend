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
