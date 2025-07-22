import React, { useState } from 'react'
import './Navbar.css'
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router';

export default function Navbar() {
    const [showMoblieMenu, setShowMoblieMenu] = useState("")
    const showMenuHandler = () => {
        setShowMoblieMenu(prev => (prev === "show" ? "" : "show"));
    }
    return (
        <>
            <div className='navbar'>
                <nav className='navbar-container containermd'>
                    <div className={`navbar-left ${showMoblieMenu}`}>
                        <div className='navbar-togler'>
                            <button className='navbar-togler__btn' onClick={() => showMenuHandler()}><FiMenu /></button>
                        </div>
                        <ul className={`navbar-list ${showMoblieMenu}`}>
                            <li className="navbar-item active"><Link to="./">Home</Link></li>
                            <li className="navbar-item"><Link to="./skills">Skills</Link></li>
                            <li className="navbar-item"><Link to="./projects">Projects</Link></li>
                            <li className="navbar-item"><Link to="./resume">Resume</Link></li>
                        </ul>

                    </div>
                    <div className='navbar-right'>
                        <button>Resume</button>
                    </div>
                </nav>
            </div>

        </>
    )
}
