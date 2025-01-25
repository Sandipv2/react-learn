import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-slate-800 p-4 text-5xl text-white text-center'>
        Welcome, {userid}
    </div>
  )
}

export default User