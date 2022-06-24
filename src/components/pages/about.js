import React, { useEffect } from 'react'
import '../../styles/about.scss'
import music from '../../images/jocelyn-morales-lIgFLLDdqMk-unsplash.webp'

import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


//let tl = gsap.timeline();


const About = () => {
  useEffect(()=>{
      //gsap.from('.about-container',{scrollTrigger:{trigger:'.about-container', pin:true, end:'+=300'}})
      gsap.to('.about-header',{ x:'0%', duration:1.4, ease:Power3.easeInOut, scrollTrigger:{trigger:'.about-header'}})
      gsap.to('.hobby-header',{y:'0%', duration:1.4, ease:Power3.easeInOut, scrollTrigger:{trigger:'.hobby-header'}})
      gsap.to('.brief-text',{y:'0%', duration:1.6, ease:Power3.easeInOut, scrollTrigger:{trigger:'.brief-text'}})
  })

 
  return (
    <>
    <div className="about-container"id='about'>
      <div className="about-section-sidetitle">
        <div className="about-sidetitle" >
          <h1 className="about-header" id='aboutMe'>
            .about me
          </h1>
        </div>
        <div className="hobby">
          <span className="hobby-span">
            <h1 className="hobby-header">anime.</h1>
          </span>
          <span className="hobby-span">
            <h1 className="hobby-header">writing.</h1>
          </span>
          <span className="hobby-span">
            <h1 className="hobby-header">music.</h1>
          </span>
        </div>
      </div>
      <div className="about-section-content">
        <div className="about-para">
          <p className="brief-text">i have a bachelor's degree in mechanical engineering. 
          very contrary to the career i'm pursuing. despite the lack of a "tech" background, 
          i taught myself to code and am designing web applications. my main focus is ui and ux.
          </p>
          </div>
          <div className="about-para">
          <p className="brief-text">
          i've always been great with design. i even designed and constructed my own house. and it's gotten compliments.
          i also love watching anime. that's where i spend most of my free time. other times, i play a sport or listen to 
          music. who would't like music during a commute? 
          </p>
        </div>
      </div>
      <picture className='music-section'>
        <img src={music} alt="music" className="music-img" />
      </picture>
    </div>
    </>
  )
}

export default About
