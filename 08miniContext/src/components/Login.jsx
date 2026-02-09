import React, { useState, useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

  const { setUser } = useContext(userContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ Username, Password })
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />

        <input
          type="password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login
