import React from 'react';
import './MobileNav.css';

const MobileNav = ({
  isOpen,
  toggleMenu,
  onHeroClick,
  onSkillsClick,
  onWorkExperienceClick,
  onContactMeClick
}) => {

  const handleClick = (callback) => {
    callback();       // Scroll to the section
    toggleMenu();     // Close the menu
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
      <div className='mobile-menu-container'>
        <ul>
          <li>
            <button className='menu-item' onClick={() => handleClick(onHeroClick)}>Home</button>
          </li>
          <li>
            <button className='menu-item' onClick={() => handleClick(onSkillsClick)}>Skills</button>
          </li>
          <li>
            <button className='menu-item' onClick={() => handleClick(onWorkExperienceClick)}>Experience</button>
          </li>
          <li>
            <button className='menu-item' onClick={() => handleClick(onContactMeClick)}>Contact</button>
          </li>
        </ul>
        <hr className="menu-separator" />
<button className='hireme-btn' onClick={() => { }}>Hire me</button>
      </div>
    </div>
  );
};

export default MobileNav;
