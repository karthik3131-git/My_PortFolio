import React, { useRef } from 'react';
import Navbar from './components/NavigationBar/Navbar'
import './components/NavigationBar/Navbar.css'
import './App.css'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperiance from './components/WorkExperiance/WorkExperiance'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'



const App = () => {

  // Create refs
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const workExperienceRef = useRef(null);
  const contactMeRef = useRef(null);


  // Function to scroll to a ref
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar onHeroClick={() => scrollToRef(heroRef)} 
              onSkillsClick={() => scrollToRef(skillsRef)}
              onWorkExperienceClick={() => scrollToRef(workExperienceRef)}
              onContactMeClick={() => scrollToRef(contactMeRef)} />
      <div className='container'>
      <div ref={heroRef} className="scroll-target"><Hero  /></div> 
      <br/><br/>       
        <div ref={skillsRef} className="scroll-target" ><Skills /></div><br/>
        <div ref={workExperienceRef} className="scroll-target"><WorkExperiance /></div>
        <br/><br/>
        <div ref={contactMeRef} className="scroll-target"><ContactMe /></div>
      </div>
      <Footer/>
    </>
  )
}

export default App




