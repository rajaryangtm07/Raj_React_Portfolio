import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      {/* poore testimonials k liye ek block  */}
      <Swiper className='container testimonials__container'
       modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
    
      pagination={{ clickable: true }}
      >
        {/* har ek testimonials k liye article */}
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='AVATAR ONE' />
          </div>

          <h5 className='client__name'>Ernest Acheiver name</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </small>
        </SwiperSlide>


        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='AVATAR ONE' />
          </div>

          <h5 className='client__name'>Ernest Acheiver name</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </small>
        </SwiperSlide>


        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='AVATAR ONE' />
          </div>

          <h5 className='client__name'>Ernest Acheiver name</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt='AVATAR ONE' />
          </div>

          <h5 className='client__name'>Ernest Acheiver name</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?
            </small>
        </SwiperSlide>

        

        
      </Swiper>
    </section>
  )
}

export default Testimonials