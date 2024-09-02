import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    let { userId } = useParams();

  return (
    <div className='bg-orange-500 text-black text-3xl text-center py-5'>User {userId}</div>
  )
}

export default User