import React from 'react'
import './Hero.css'




const Hero = () => {
  return (
    <section className='hero-container'>        
        <div className='hero-content'>
            <h2>Full Stack Developer</h2>
            <p>
      Turning complex ideas into seamless, scalable, and user-centric applications.<br />
      Experienced in both frontend and backend development using React, .NET, SQL, and more.
    </p>
        </div>

        <div className='hero-img'>           
            <div>
                <div className='tech-icon'>
                    <img src='./images/react.png' alt=''/>
                </div>
                <img src='./images/main.png' alt=''/>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src='./images/html.png' alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src='./images/css.jpg' alt=''/>
                </div>
                <div className='tech-icon'>
                    <img src='./images/chatgpt.jpg' alt=''/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
