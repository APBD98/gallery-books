import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { auth } from '../../config/firebase/firebase'
import background from '../../images/book.jpg'
import Register from '../Register/Register'

export default function Login() {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const logo = useSelector((state) => state.user.logo)

  const handleLogin = (e) =>{
    e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("success", user)
      navigate("/main")
      // ...
    })
    .catch((error) => {
      setError(true)
    });
  }
  return (
    <div className='login-page' style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <div className="logo">
        <h1>AZ</h1>
      </div>
        <div className='login-form'>
          <p>Welcome</p>
          <input type="text" name="email" id="email" placeholder='email..' onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" name='password' id='password' placeholder='password..' onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={handleLogin}>Log in</button>
          {error && <span>wrong email or password</span> }          
          <p>Or</p>
          <Link to="/register" element={<Register/>}>Sign Up</Link>
        </div>
    </div>
  )
}
