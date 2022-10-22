import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../Register/Register'
import background from '../../images/book.jpg'

export default function Dashboard() {
  return (
    <div className='dashboard' style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' }}>
      <nav>
        <Link to="/login" element={<Login/>}>Log In</Link>
        <Link to="/register" element={<Register/>}>Sign Up</Link>
      </nav>
      <h1>Dear readers, please welcome</h1>
    </div>
  )
}
