import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar-container'>
                <div className='navbar-left'>
                    <ul className='navbar-list'>
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
