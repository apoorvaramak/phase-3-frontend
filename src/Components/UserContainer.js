import { useState, useEffect } from 'react';
import UserList from './UserList'

function UserContainer({ users }){


    return(
        <div>
            <UserList users={users} />
        </div>
    )
}

export default UserContainer;