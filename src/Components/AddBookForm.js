import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddBookForm({ books, setBooks }){
    let history = useHistory()
    const [ addBookFormData, setAddBookFormData ] = useState({
        title: "",
        author: "",
        publisher: "",
        genre: "",
        page_count: 0,
        id: null
    })

    function manageAddFormData(e){
        let key = e.target.name
        let value = e.target.value
        setAddBookFormData({
            ...addBookFormData,
            [key]: value
        })
    }

    function onSubmitNewBook(e){
        e.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/books/add`, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(addBookFormData)
        })
        .then(response => response.json())
        .then(data => {
            setBooks([data, ...books])
            //if want new book to go to bottom switch data and ...books order
            setAddBookFormData({
                title: "",
                author: "",
                publisher: "",
                genre: "",
                page_count: 0,
                id: null
            })
            history.push("/books")
        })
      }



    return (
        <div>
            <form onSubmit={onSubmitNewBook}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input onChange={manageAddFormData} value={addBookFormData.title}
                    type="text" name="title" placeholder="title"/>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input onChange={manageAddFormData} value={addBookFormData.author}
                    type="text" name="author" placeholder="author"/>
                </div>
                <div>
                    <label htmlFor="publisher">Publisher: </label>
                    <input onChange={manageAddFormData} value={addBookFormData.publisher}
                    type="text" name="publisher" placeholder="publisher"/>
                </div>
                <div>
                    <label htmlFor="genre">Genre: </label>
                    <input onChange={manageAddFormData} value={addBookFormData.genre}
                    type="text" name="genre" placeholder="genre"/>
                </div>
                <div>
                    <label htmlFor="page_count">Page Count: </label>
                    <input onChange={manageAddFormData} value={addBookFormData.page_count}
                    type="number" name="page_count" placeholder="#" min="0"/>
                </div>
                <div>
                    <button type="submit" className="add-book-button">Add New Book</button>
                </div>
            </form>
        </div>
    )
}

export default AddBookForm;