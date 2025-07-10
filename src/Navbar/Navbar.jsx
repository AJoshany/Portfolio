import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar-container'>
                <div className='navbar-left'>
                    <ul className='navbar-list'>
                        <li className="navbar-item">Home</li>
                        <li className="navbar-item">Skills</li>
                        <li className="navbar-item">Projects</li>
                        <li className="navbar-item">Resume</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
