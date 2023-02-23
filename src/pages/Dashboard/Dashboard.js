import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../Register/Register'
import background from '../../images/book.jpg'

export default function Dashboard() {
  const styles = {
    dashboard:{
      position:'absolute',
      top:'0',
      left:'0',
      right:'0',
      width:'100%',
      height:'100vh',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'   
    },
    nav:{
      width:'300px',
      height:'80px',
      position:'absolute',
      top:'10px',
      right:'200px',
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'

    },
    h1:{
      position:'absolute',
      top:'250px',
      left:'100px',
      fontFamily:'poppins'
    },
    link:{
      textAlign:'center',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      textDecoration:'none',
      width: '100px',
      height: '40px',
      margin: '20px',
      borderRadius: '10px',
      color: 'rgb(245, 239, 239)',
      backgroundColor: 'grey',
      fontFamily:'poppins'

    }

  }

  return (
    <div className='dashboard' style={styles.dashboard}>
      <nav style={styles.nav}>
        <Link to="/login" element={<Login/>} style={styles.link}>Log In</Link>
        <Link to="/register" element={<Register/>} style={styles.link}>Sign Up</Link>
      </nav>
      <h1 style={styles.h1}>Dear readers, please welcome</h1>
    </div>
  )
}

