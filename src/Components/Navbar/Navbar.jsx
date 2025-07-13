import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    const [showMoblieMenu, setShowMoblieMenu] = useState("")
    const showMenuHandler = () => {
        setShowMoblieMenu(prev => (prev === "show" ? "" : "show"));
    }
    return (
        <>
            <nav className='navbar-container '>
                <div className={`navbar-left ${showMoblieMenu}`}>
                    <div className='navbar-togler'>
                        <button className='navbar-togler__btn' onClick={() => showMenuHandler()}><FiMenu /></button>
                    </div>
                    <ul className={`navbar-list ${showMoblieMenu}`}>
                        <li className="navbar-item active"><a href='#'>Home</a></li>
                        <li className="navbar-item"><a href='#'>Skills</a></li>
                        <li className="navbar-item"><a href='#'>Projects</a></li>
                        <li className="navbar-item"><a href='#'>Resume</a></li>
                    </ul>

                </div>
                <div className='navbar-right'>
                    <button>Resume</button>
                </div>
            </nav>

        </>
    )
}
