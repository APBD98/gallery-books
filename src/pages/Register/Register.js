import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import { auth } from '../../config/firebase/firebase'
import {createUserWithEmailAndPassword} from "firebase/auth"
import background from '../../images/book.jpg'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const logo = useSelector((state) => state.user.logo)

  const handleSubmit = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth,  email, password)
      navigate("/main")
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='register-page' 
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      height:'100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position:'absolute',
      top:'0',
      left:'0',
      right:'0', }}>
      <div className="logo">
        <h1>AZ</h1>
      </div>
      <div className="login-form">
        <p>Welcome</p>
        <input className='email' id='email' type="text" placeholder='email' onChange={(e) => {
          setEmail(e.target.value)}}/>
        <input className='password' id='password' type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Sign Up</button>
        <Link to="/" element={<Dashboard/>}>Home</Link>
      </div>
    </div>
  )
}
