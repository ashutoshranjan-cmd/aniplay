import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch("http://localhost:4000/api/signup/signup",{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        })
        if(response.ok)
        {
          let result = await response.json()
          console.log(result)
          console.log(email,password)
          localStorage.setItem('user', JSON.stringify('user',result))
          navigate('/home')

        }
        else{
          console.log('there is something error');
        }


    }
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="signup-container">
    <h3>Sign up</h3>

    <label>Email address:</label>
    <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder='Enter your emal here ...'
    />
    <label>Password:</label>
    <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder='Enter your password here ...'
    />

    <button >Sign up</button>
    {/* {error && <div className="error">{}</div>} */}
    </div>
</form>
  )
}
