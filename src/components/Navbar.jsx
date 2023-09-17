import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navbar.css'
import '../css/style.css'
import { useState } from 'react'

function Navbar() {
    const [navActive, setNavActive] = useState(false)
    
    function toggleNav() {
        setNavActive(!navActive)
    }

    return(
        <>
        <header>
            <div className='container'>
                <div className='navbar-right'>
                    <Link to={'/'}>
                        <h1>abrahamgregorius</h1>
                    </Link>
                </div>
                <div className="toggle-nav" id='toggle-nav' onClick={toggleNav}>
                    <span>&equiv;</span>
                </div>
                <div className={`navbar-left`} id="navbar-left">
                    {/* Ternary operator for showing navbar ==  ${navActive ? " show" : ""} */}
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        {/* <li><NavLink to={'/projects'}>Projects</NavLink></li>
                        <li><NavLink to={'/contact'}>Contact</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </header>

        </>
    )
}

export default Navbar