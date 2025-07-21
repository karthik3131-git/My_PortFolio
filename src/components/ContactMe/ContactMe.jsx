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
          <ContactInfoCard
            iconUrl="./images/email.png"
            text={
              <a
                href="mailto:karthik110720@gmail.com"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                My Official Gmail Account
              </a>
            }
          />

          <ContactInfoCard
            iconUrl="./images/Linkdin.png"
            text={
              <a
                href="https://www.linkedin.com/in/karthik-periyasamy110720"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Linkedin Profile
              </a>
            }
          />
        </div>

        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
