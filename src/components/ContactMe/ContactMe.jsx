import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me</h5>
      <div className='contact-content'>
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl="./images/email.png" text="Karthik110720@gmail.com" />
          <a href="https://www.linkedin.com/in/karthik-periyasamy110720" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
            <ContactInfoCard iconUrl="./images/Linkdin.png" text="www.linkedin.com/in/karthik-periyasamy110720" />
          </a>

        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
