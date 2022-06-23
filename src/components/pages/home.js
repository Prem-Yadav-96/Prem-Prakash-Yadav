import React, { useEffect, useState } from 'react'
import gsap , {Power3} from 'gsap'
import Overlay from './overlay'
import MainContent from '../pages/mainContent'
import '../../styles/mainContent.scss'

//import useLocoScroll from '../../useLocoScroll'

//creating timeline
let tl = gsap.timeline();

let homeAnimation = (completeAnimation) => {
  
  tl.fromTo('.domain-span', {x:100}, {x:0, duration: 1.4, delay:1, ease: Power3.easeInOut})
  tl.fromTo('.front', {y:-100, skewY:5}, {y:0, duration: 1.4, skewY:0,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.eng', {y:-100, skewY:5}, {y:0, duration: 1.4, skewY:0,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.prem', {y:-100, skewY:5}, {y:0, duration: 1.4, skewY:0,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.back', {y:-100, skewY:5}, {y:0, duration: 1.4, skewY:0,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.design', {y:-100, skewY:5}, {y:0, duration: 1.4, skewY:0, ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.resp-span', {x:-100}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-domain', {y:-1000}, {y:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-front', {x:-1000}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-eng', {x:-1000}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-prem', {x:-1000}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-back', {x:-1000}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-design', {x:-1000}, {x:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.fromTo('.crc-resp', {y:-1000}, {y:0, duration: 1.4,  ease: Power3.easeInOut}, "-=1")
  tl.to(".container", {y:'-100%', duration:1.6, ease: Power3.easeOut, delay: 1, onComplete: completeAnimation})
  
};

function Home() {
  
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () =>{
    setAnimationComplete(true)
  };


  //useLocoScroll(animationComplete);

  useEffect(() => {
   homeAnimation(completeAnimation);
  },[]);

  return (
    <>  
    {animationComplete === false ? <Overlay/> :  
    <>
      <MainContent/> 
    </>
    }
    </>
  )
}

export default Home