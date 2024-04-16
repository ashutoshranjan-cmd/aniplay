import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [anime, setAime] = useState('')
  const [character, setCharacter] = useState('')
  const [quote, setQuote] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {

    const quotes = async () => {
      const response = await fetch("https://animechan.xyz/api/random")


      try {
        const result = await response.json();
        console.log(result)
        setAime(result.anime)
        setCharacter(result.character)
        setQuote(result.quote)
      }
      catch (error) {
        console.log(error)
      }
    }
    quotes();

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await fetch("http://localhost:4000/api/login/login", {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    let result = await response.json()
    if (response.ok) {
      console.log(result);
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/home')
    }
    else {
      console.log('something is error here')
      setError(result.error)
    }
    console.log(result)
    console.log(email, password)
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="quotes-container">
        <div className="anime-quotes">
          <h1>
            {anime}
          </h1>
          <h3>
            {character}
          </h3>
          <h6>
            {quote}
          </h6>
        </div>
      </div>
      <div className="login-container">
        <h3>Log In</h3>

        <label>Email address</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder='Enter your email here ...'
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder='Enter your password here ...'
        />
        <NavLink to={"/forget"} >Forget password</NavLink>

        <button >Log in</button>
        <h6>New user  <NavLink to={"/signup"} >Signup</NavLink> </h6>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  )
}

export default Login
