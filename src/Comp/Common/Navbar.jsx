import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header">
       <nav className="navbar">
        <Link to={"/home"}>
            <a>Home</a>
            </Link>
            <Link to={"/todo"}>
            <a>TODO List</a>
            </Link>
            <Link to={"/countries"}>
            <a>Get Countries Data</a>
            </Link>
        </nav>
    </header>
  )
}

export default Navbar
