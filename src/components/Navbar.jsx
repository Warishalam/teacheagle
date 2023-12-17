import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",
      gap:"30px",padding:"20px",backgroundColor:"pink",color:'white'
    }}>
        <Link to="/signUp">SignUp</Link>
        <Link to="/login">Login</Link>
        <Link to="/customer">Customer-Dashboard</Link>
        <Link to="/manager">Manager-Dashboard</Link>
    </div>
  )
}

export default Navbar