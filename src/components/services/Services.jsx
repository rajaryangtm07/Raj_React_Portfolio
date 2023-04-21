import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>


    <div className='container services__container'>
       <article className='service'>
         <div className='service__head'>
              <h3>Web Development</h3>
         </div>

       <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icons'/>
            <p>Good knowledge of UI </p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Comfortable in using HTML,Javascript,CSS and React in front end</p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Have knowledge of NodeJS , ExpressJS , MongoDB</p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Developed project using the mentioned technology</p>
           </li>

           
       </ul>
              
       </article>
       {/* END OF UI UX */}

       <article className='service'>
         <div className='service__head'>
              <h3>Team Player</h3>
         </div>

       <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icons'/>
            <p>Participated in SIH-2022 with team</p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Participated in chess for my branch in Sports Day</p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Team first approach than personal milestone</p>
           </li>

          </ul>
              
       </article>
       {/* END OF WEB  DEVELOPMENT  */}



       <article className='service'>
         <div className='service__head'>
              <h3>Problem Solving</h3>
         </div>

       <ul className='service__list'>
           <li>
            <BiCheck className='service__list-icons'/>
            <p>Good knowledge of DSA </p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Lots of problem solved in leetcode , gfg </p>
           </li>

           <li>
            <BiCheck className='service__list-icons'/>
            <p>Playing Chess helps  in problem solving(secure 2nd rank in college club)</p>
           </li>

          
       </ul>
              
       </article>
       {/* END OF CONTENT CREATION */}
    </div>

    </section>
  )
}

export default Services