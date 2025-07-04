import React, { useState } from 'react'
import MobileNav from './MobileNav/MobileNav';
import './Navbar.css'

const Navbar = ({ onHeroClick, onSkillsClick, onWorkExperienceClick, onContactMeClick }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <>
      {<MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />}
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <ul>
            <li>
              <a href="#home" onClick={onHeroClick}  className='menu-item'>Home</a>
            </li>
            <li>
              <a href="#skills" onClick={onSkillsClick}  className='menu-item'>Skills</a>
            </li>
            <li>
              <a href="#exp" onClick={onWorkExperienceClick} className='menu-item'>Experience</a>
            </li>
            <li>
              <a href="#contact" onClick={onContactMeClick} className='menu-item'>Contact</a>
            </li>
            <button className='contact-btn' onClick={() => { }}>Hire me</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-icons">
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>

  )
}

export default Navbar

