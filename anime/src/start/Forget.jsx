import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,SetError] = useState(null)
    const navigate = useNavigate()
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        let response = await fetch("http://localhost:4000/api/update/update",{
          method:'put',
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
          localStorage.setItem('user', JSON.stringify(result))
          navigate('/home')

        }
        else{
          SetError(result.error)
          console.log('there is something error');
        }


    }
    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-container">
                <h3>Change password</h3>

                <label>Email</label>
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder='Enter your email here ...'
                />
                <label>New password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder='Enter your new password password ...'
                />

                <button >Update Password</button>
                {/* {error && <div className="error">{error}</div>} */}
            </div>
        </form>
    )
}

export default Forget
