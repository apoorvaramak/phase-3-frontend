import { useState } from 'react';

function AddUserForm({ users, setUsers, setCurrentUser }){
    const [ addUserFormData, setAddUserFormData ] = useState({
        name: "",
        birthday: "",
        xp: 0,
        pfp: "",
        id: null
    })

    function manageAddFormData(e){
        let key = e.target.name
        let value = e.target.value
        setAddUserFormData({
            ...addUserFormData,
            [key]: value
        })
		console.log("UserForm/addUserFormData:", addUserFormData)
    }

	function manageChangeFormBirthday(e) {
		console.log("ChangeBirthday:", e.target.value)
	    setAddUserFormData({
            ...addUserFormData,
            ["birthday"]: e.target.value
        })	
	}

    function onSubmitNewUser(e){
        e.preventDefault()
		console.log("OnSubmitNewUser/addUserFormData:", addUserFormData)
        fetch(`${process.env.REACT_APP_API_URL}/users/add`, {
        method: "POST",
        header: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(addUserFormData)
        })
        .then(response => response.json())
        .then(data => {
			console.log("first data", data)
            setUsers([data, ...users])
            //if want new User to go to bottom switch data and ...Users order
			setCurrentUser(data)
            setAddUserFormData({
                name: "",
				birthday: "",
				xp: 0,
				pfp: "",
                id: null
            })
        })
      }



    return (
        <div>
            <form className="form-div" onSubmit={onSubmitNewUser}>
            {/* <form className="form-div"> */}
				<h2>Add a New User</h2>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input onChange={manageAddFormData} value={addUserFormData.name}
                    type="text" id="name" name="name" placeholder="name"/>
                </div>
                <div>
                    <label htmlFor="birthday">Birthday: </label>
                    <input onChange={manageChangeFormBirthday} value={addUserFormData.birthday}
                    type="date" id="birthday" name="birthday" />
                </div>
                <div>
                    <label htmlFor="pfp">Profile Picture: </label>
                    <input onChange={manageAddFormData} value={addUserFormData.pfp}
                    type="text" id="pfp" name="pfp" placeholder="add a url..."/>
                </div>
                <div>
                    <button type="submit" className="submit-input">Add New User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm;