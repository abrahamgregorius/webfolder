import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navbar.css'
import '../css/style.css'
import { useState } from 'react'

function Navbar() {
    const [isNavbarClicked, setIsNavbarClicked] = useState(false)
    
    function toggleNav() {
        setNavActive(!navActive)
    }

    return(
        <>
        <div className="navbar flex justify-between items-center relative font-semibold">
                <div className="nav-left">
                    <Link to="/" className="font-black font-mono">abrahamgregorius</Link>
                </div>
                <div className="nav-toggle min-[420px]:hidden flex gap-3">
                    <span className="text-2xl" onClick={() => setIsNavbarClicked(!isNavbarClicked)}>&equiv;</span>
                </div>
                <div className="nav-right max-[420px]:hidden flex gap-3">
                    <NavLink className={"text-sm hover:underline transition"} to="/projects">projects</NavLink>
                    <NavLink className={"text-sm hover:underline transition"} to="/achievements">achievements</NavLink>
                </div>
            </div>
            <div className={`nav-toggle-menu h-[20vh] underline text-center font-normal border-b gap-2 mb-2 mt-2 w-full flex  px-4 justify-center flex-col min-[420px]:hidden ${isNavbarClicked ? "flex" : "hidden"}`}>
                <NavLink className={"text-xl hover:text-slate-400 transition"} to="/">home</NavLink>
                <NavLink className={"text-xl hover:text-slate-400 transition"} to="/projects">projects</NavLink>
                <NavLink className={"text-xl hover:text-slate-400 transition"} to="/achievements">achievements</NavLink>
            </div>

        </>
    )
}

export default Navbar