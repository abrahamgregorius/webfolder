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
                <div className={`navbar-left ${navActive ? " show" : ""}`} id="navbar-left">
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        {/* <li><NavLink to={'/project'}>Projects</NavLink></li>
                        <li><NavLink to={'/achievements'}>Achievements</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </header>

        </>
    )
}

export default Navbar