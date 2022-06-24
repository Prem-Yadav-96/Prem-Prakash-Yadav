import React ,{ useEffect } from 'react'
import '../../styles/intro.scss'
import mypic from '../../images/IMG_20220622_114030.webp'



import gsap, { Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import SmoothScroll from '../../smoothScroll'


gsap.registerPlugin(ScrollTrigger);



const Intro = () => {


  useEffect(()=>{
    setTimeout(()=>{
      //gsap.from('.about-container',{scrollTrigger:{trigger:'.about-container', pin:true, end:'+=300'}})
      gsap.to('.intro-header',{ y:'0%', duration:1.4, ease:Power3.easeInOut, scrollTrigger:{trigger:'.intro-header'}})
      gsap.to('.intro-content-para span p',{y:'0%', duration:1.4, ease:Power3.easeInOut, scrollTrigger:{trigger:'.intro-content-para'}})
      gsap.to('.mypic',{x:'0%', duration:1.6, ease:Power3.easeInOut, scrollTrigger:{trigger:'.mypic', start:'center bottom'}})
      gsap.to('.myname',{x:'0%', duration:1.6, ease:Power3.easeInOut, scrollTrigger:{trigger:'.myname', start:'center bottom'}})
    })
  })


  return (

    <div className="intro-container">
      <section className="intro-section-left">
        <div className="intro-content-headers">
          <span>
            <h1 className='intro-header'>user experience.</h1>
          </span>
          <span>
          <h1 className='intro-header'>web interface.</h1>
          </span>
        </div>
        <div className="intro-content-para">
          <span>
            <p> i am a self taught web developer who designs web interfaces for a seamless user experience. 
              i mainly do font-end work, but i also work back-end. i am passionate about the work that i put out
              with the end goal being end-user interaction of the most emmersive level. 
            </p>
          </span>
        </div>
      </section>
      <section className="intro-section-right">
      <picture className='intro-content-pic'>
        <div className='mypic-container'>
          <img className='mypic' src={mypic} alt='prem'/>
        </div>
      </picture>
      <div className='intro-content-name'>
        <h1 className='myname'>prem prakash yadav.</h1>
      </div>
      </section>
    </div>
  )
}

export default Intro