import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async() => {
        const res = await axios.get('https://panorbit.in/api/users.json')
        try {
            const data = res.data;
            console.log(data);
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUsers()
    }, []);

  return (
        <div>
            {users.length > 0 && (
                <ul>
                    {users.map((user) => (
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.profilepicture}</span>
                    </li>
                    ))}
                </ul>
            )}
        </div>
  )
}

export default UserList;
