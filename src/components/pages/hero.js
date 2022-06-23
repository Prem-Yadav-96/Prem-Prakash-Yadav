import React from 'react'
import '../../styles/Hero.scss'
import desk from '../../images/samantha-gades-BlIhVfXbi9s-unsplash.jpg'
import blackImg from '../../images/annie-spratt-2aeqJ5sLO-0-unsplash.jpg'

//import gsap from 'gsap'
//import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'

//gsap.registerPlugin(ScrollTrigger)



const Hero = () => {
  return (
    <>
    <div className="main-hero-container"  id= 'smooth-content'>
      <div className="hero-container" id='home'>
        <section className='left-section'>
          <span className="hello">
            <h1>'hello,</h1>
            </span>
        </section>
        <section className='middle-section'>
          <span className="text"><h2>design</h2></span>
          <span className="text"> <h2>&amp; </h2></span>
          <span className="text"> <h2>develope'</h2></span>
        </section>
       
        <div className="black-box">
          <img src={blackImg} alt="black-box" className="black-box-img"/>
        </div>
        <div className="desk">
          <img src={desk} alt="desk" className="desk-img"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero