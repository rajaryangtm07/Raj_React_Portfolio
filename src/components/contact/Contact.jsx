import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import { RiMessengerLine}from 'react-icons/ri'
import {BsWhatsapp }from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from "emailjs-com"
const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r2m4nv5', 'template_pf5clnj', form.current, '4DyeWgm5L63qCa4hu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
      <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
           <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>rajaryangtm@gmail.com</h5>
             <a href='mailto:rajaryangtm@gmail.com' target="_blank">Send a message </a>
          </article>
          
          <article className='contact__option'>
           <RiMessengerLine className='contact__option-icon'/>
             <h4>Messenger</h4>
             <h5>rajaryangtm@gmail.com</h5>
             <a href='https://m.me/raj.aryangautam.7' target="_blank">Send a message </a>
          </article>

          <article className='contact__option'>
           <BsWhatsapp className='contact__option-icon'/>
             {/* <h4>BsWhatsapp</h4> */}
             <h5>rajaryangtm@gmail.com</h5>
             <a href='https://api.whatsapp.com/send?phone=+916260362930' target="_blank">Send a message </a>
          </article>

       </div>
          

       {/* END OF CONTACT OPTIONS */}
       <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder='You Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
       </form>
    </div>
    </section>
  )
}

export default Contact