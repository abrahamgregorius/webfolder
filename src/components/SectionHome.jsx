import { useEffect, useState } from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

function SectionHome() {
    return (
        <>
        <div className="home-section">
            <Link to="/login" className='btn'>Login</Link>
            <Link to="/register" className='btn'>Register</Link>
        </div>


        </>
    )
}

export default SectionHome