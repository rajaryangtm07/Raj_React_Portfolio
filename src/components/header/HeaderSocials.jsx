import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='linkedin.com/in/raj-aryan-041911233' > <BsLinkedin/></a>
        <a href='https://github.com/rajaryangtm07' ><FaGithub/></a>
        <a href='https://www.instagram.com/rajaryangautam2865/'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials