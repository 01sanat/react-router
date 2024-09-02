import React, { useEffect, useState } from 'react'
import getUserList from '../../api/getUserList'
import { Link } from 'react-router-dom';

const Users = (props) => {

   const [users , setUsers ] = useState([]);
  useEffect(()=>{
    getUserList().then((data)=>{
        setUsers(data)
    });
      
  },[])
    
  return (
    <div>
      {users.map((user)=>{
        return <li key={user.id}>
        <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li> 
      })}
    </div>
  )
}

export default Users