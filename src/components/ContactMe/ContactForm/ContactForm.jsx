import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
      <form 
        action="https://formsubmit.co/karthik110720@gmail.com" 
        method="POST"
      >
        {/* 🔒 Optional: hidden inputs for extra behavior */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New message from your portfolio site" />

        <div className='name-container'>
          <input type='text' name='firstname' placeholder='First Name' required />
          <input type='text' name='lastname' placeholder='Last Name' required />
        </div>
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Message..' rows={3} required />
        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;
