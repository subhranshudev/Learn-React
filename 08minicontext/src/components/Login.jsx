import React, { useContext, useState } from 'react'
import UserContext from '../context/Usercontext'

 function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Log in</h2>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
            {" "}
            <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login