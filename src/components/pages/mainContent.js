import React, { useEffect } from 'react'
import gsap, {Power3} from 'gsap'
//import { ScrollTrigger } from 'gsap/ScrollTrigger'
//import Scrollbar from 'smooth-scrollbar'


//importing pages
//import Scroll from '../../scoll.js';
import Menu from '../menu/menu.js';
import Hero from './hero';
import Intro from './intro';
import Contact from './contact'
import About from './about'
import SmoothScroll from '../../smoothScroll.js';


let tl = gsap.timeline();
 
let mainAnimation = () => {
  tl.to(".nav-header",{y:"0%", duration: 1.4, ease: Power3.easeInOut, delay:0})
  tl.to(".hello h1", {x:"0%", duration:2, ease:Power3.easeInOut}, "-=1")
  tl.to(".text h2", {y:"0%", duration:2, ease:Power3.easeInOut, stagger:0.4}, "-=1")
  tl.to(".black-box-img", {x:"0%", opacity:1, duration:2, ease:Power3.easeInOut}, "-=2")
  tl.to(".desk-img", {x:"0%", opacity:1, duration:2, ease:Power3.easeInOut}, "-=2")
  // tl.to('.about-header',{ x:'0%', duration:1, ease:Power3.easeIn, ScrollTrigger:{trigger:'#aboutMe'}})
  // tl.to('.hobby-header',{y:'0%', duration:1, ease:Power3.easeIn, ScrollTrigger:{trigger:'.hobby-header'}})
  // tl.to('.brief-text',{y:'0%', duration:1, ease:Power3.easeIn, ScrollTrigger:{trigger:'.brief-text'}})
}


const MainContent = () => {
  
  useEffect(() =>{
 

    //animation for other elements
      mainAnimation();
  });
  
  return (
    <>
    <div className='scrollContainer' id='scroll-container'>
    <Menu/>
    <SmoothScroll/>
    <Hero/>
    <Intro/>
    <About/>
    <Contact/>
    </div>
    </>
  )
}

export default MainContent
