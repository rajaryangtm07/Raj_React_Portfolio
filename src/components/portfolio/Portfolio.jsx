import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/note_keeper.png"
import IMG2 from "../../assets/BookMark.png"
import IMG3 from "../../assets/To_do_list.png"
import IMG4 from "../../assets/weather.png"
import IMG5 from "../../assets/react.png"
import IMG6 from "../../assets/front_end.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>

   <div className='container portfolio__container'>

   <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img   className='img_port' src={IMG1} alt=''/>
      </div>
      <h3>The Note Keeper</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/rajaryangtm07/Full_Stack_Keeper_App' target='_blank'  className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


    <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img  className='img_port' src={IMG2} height="400x" alt=''/>
      </div>
      <h3>Youtube extension of bookmarking timestamp</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/rajaryangtm07/You_Tube_TimeStamp_Bookmatker_Extension/tree/main/youtube-bookmark-project' target='_blank' className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


    <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img   className='img_port' src={IMG3} alt=''/>
      </div>
      <h3>To do list</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com'  target='_blank' className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


    <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img   className='img_port' src={IMG4} alt=''/>
      </div>
      <h3>Weather Reporter</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com' target='_blank' className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


    <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img   className='img_port' src={IMG5} alt=''/>
      </div>
      <h3>Portfolio using react </h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com'   target='_blank' className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


    <article className='portfolio__item'>
      <div className='portfolio_item-image'>
        <img  className='img_port' src={IMG6} alt=''/>
      </div>
      <h3>Basic Front End Page</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/rajaryangtm07/my-personal-site' target='_blank'  className='btn'>Github</a>
      {/* <a href='https://dribble.com/Alien_pixels' className='btn btn-primary'>Live Demo</a> */}
      </div>
    </article>


   


  

   
   

   

   </div>
    </section>
  )
}

export default Portfolio