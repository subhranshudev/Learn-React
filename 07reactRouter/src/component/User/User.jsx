import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-400 text-3xl text-white rounded-lg shadow-md p-3 m-2'>User: {userid}</div>
    )
}

export default User
