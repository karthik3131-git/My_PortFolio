import React from 'react'
import './MobileNav.css'


const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >

                <div className='mobile-menu-container'>
                    <ul>
                        <li>
                            <a href="#home" className='menu-item'>Home</a>
                        </li>
                        <li>
                            <a href="#skills" className='menu-item'>Skills</a>
                        </li>
                        <li>
                            <a href="#exp" className='menu-item'>Experience</a>
                        </li>
                        <li>
                            <a href="#contact" className='menu-item'>Contact</a>
                        </li>
                        
                        <button className='contact-btn' onClick={() => { }}>Hire me</button>
                        
                    </ul>
                </div>
            </div>

        </>
    );
}

export default MobileNav
