import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers}  from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
   <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>
  

  {/* container of image in  about  */}
   <div className='container about__container'>
     <div className='about__me'>
      <div className='about__me-image'>
         <img src={ME}  alt="About Image"/>
      </div>

     </div>


  {/* container of card in about */}
     <div className='about__content'>
     
       <div className='about__cards'>
         <article className='about__card'>
         <FaAward className='about__icon'/>
         <h5>Experience</h5>
         <small>Learning and making project from 2021</small>
         </article>

         {/* <article className='about__card'>
         <FiUsers className='about__icon'/>
         <h5>Clients</h5>
         <small>500 clients world wide </small>
         </article> */}

         <article className='about__card'>
         <VscFolderLibrary className='about__icon'/>
         <h5>Project</h5>  
         <small>4 Project </small>
         </article>

       </div>
       <p>
       I am pursing my B.Tech from IET DAVV Indore. I have good grasp on data structures and algorithm  which helps me to be a good problem solver also I have my intrest in web development for which I learnt the tech such as HTML ,CSS , Javascript and many more. I am quick learner and a good leader too and I always thrive to learn something new and always ready for the new challenges.
       </p>
       <a href='#contact' className='btn btn-primary'>Let's Talk</a>
       
     </div>

   </div>
   </section>
  )
}

export default About


// make all the folder and add their css along with it  
// now add all the folder in app.js in the order in which yo want to present 
