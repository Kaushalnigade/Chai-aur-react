import React, {useState, useContext} from 'react'
import userContext from '../context/userContext'

function Login() {

    const [Password, setPassword] = useState('')
    const [Username, setusername] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({Username, Password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={Username} 
            onChange={(e) => setusername(e.target.value)}
            placeholder = 'Username'/>
        <input type='text' placeholder = 'Password'/>
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
