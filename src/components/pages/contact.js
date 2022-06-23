import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Contact.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import gsap, { Power3, Expo } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ReactTooltip from 'react-tooltip';

gsap.registerPlugin(ScrollTrigger);



const Contact = () => {

  //let [emailValue, setEmailValue] = useState('');
  useEffect(()=>{

    //setEmailValue='prem.yad96@gmail.com';

    setTimeout(()=>{
      //gsap.from('.about-container',{scrollTrigger:{trigger:'.about-container', pin:true, end:'+=300'}})
      gsap.to('.contact-end-notes',{ y:'0%', duration:1.4, ease:Expo.easeInOut, scrollTrigger:{trigger:'.contact-end-notes'}})
      gsap.to('.email-span h1',{y:'0%', duration:1.4, ease:Expo.easeInOut, scrollTrigger:{trigger:'.email-span'}})
      
    })
  })


  return (
    
    <div className='contact-container' id='contact'>
    <div className="contact-section-intro">
      <span>
        <ul className='contact-intro-list'>
          <li className='contact-end-notes'>this was me.</li>
          <li className='contact-end-notes'>let's collaborate.</li>
          <li className='contact-end-notes'>reach out to me!</li>
        </ul>
      </span>
    </div>
    <div className="contact-section-email">
      <span className='email-span'>
          <CopyToClipboard text='prem.yad96@gmail.com'>
          <h1 className='email' data-tip="Coppied to Clipboard">
            <ReactTooltip event='click' eventOff='click'/>
            prem.yad96@gmail.com
            </h1>
          </CopyToClipboard>
          
      </span>
    </div>
    <div className="contact-section-socials">
      <div className="contact-footer">
        <span className="credits">
          designed by. <br/> prem prakash yadav.
        </span>
        <nav className="social-media">
          <ul className='socials-list'>
          <li><a href='https://www.instagram.com/prem.yadav.96/?hl=en' target="_blank">instagram.</a></li>
          <li><a href='https://twitter.com/Prem_Yadav_96' target="_blank">twitter.</a></li>
          <li><a href='https://www.facebook.com/profile.php?id=100082412238097' target="_blank">facebook.</a></li>
          
          </ul>
        </nav>
      </div>
    </div>
    </div>
    
  )
}

export default Contact