import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import getUserById from '../../api/getUser';

const UserCard = () => {

  const {userId} = useParams();
  const [userData , setUserData] = useState(null);
 
  useEffect(()=>{
    getUserById(userId).then((data)=>{
      setUserData(data);
    })
  },[])
  return (
   userData && <div className='flex'>
    <div className='bg-slate-100 m-4 p-4 inline-flex justify-center flex-col items-start mx-auto'>
        <li><span className='font-semibold'>Name</span> : {userData.name}</li>
        <li><span className='font-semibold'>Email</span> : {userData.email}</li>
        <li><span className='font-semibold'>Website</span> : {userData.website}</li>
  </div>
   </div>
  )
}

export default UserCard