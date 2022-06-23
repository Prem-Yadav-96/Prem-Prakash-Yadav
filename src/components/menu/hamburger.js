import React, { useEffect, useRef } from 'react'
import gsap, { Expo } from 'gsap'
import '../../styles/hamburger.scss'

const Hamburger = ({state}) => {

let navmenu = useRef(null);


let t3 = gsap.timeline();
let t4 = gsap.timeline();

const menuExit = (node1) => {
  t3.to(node1, {duration:1.6, x:"100%", ease: Expo.easeOut, display:'none'})

  
}
const menuReveal = (node1) => {
  t4.to(node1,{duration:0, display:'flex'});
  t4.to(node1,{duration:1.2, opacity:1, x:"0%",ease: Expo.easeInOut});

}


  useEffect(() => {
    if(state.clicked === false){
      //close menu
        menuExit(navmenu)
     
    } else if(
      state.clicked === true || 
      (state.clicked === true && state.initial === null)
      ){
      //open menu
        menuReveal(navmenu)
    }
  },[state]);


  return (
    <>
        <div ref={el=>(navmenu=el)} className="nav-container">
        <div className="socials">
          <span><a rel="noreferrer" href='https://www.facebook.com/profile.php?id=100082412238097' target="_blank">facebook.</a></span>
          <span><a rel="noreferrer" href='https://www.instagram.com/prem.yadav.96/?hl=en' target="_blank">instagram.</a></span>
          <span><a rel="noreferrer" href='https://twitter.com/Prem_Yadav_96' target="_blank">twitter.</a></span>
        </div>
        <nav className="menu">
          <div className="menu-item">
            <a href='/#home' className="menu-item-link" onClick={() => {menuExit(navmenu)}}>home.</a>
          </div>
          <div className="menu-item">
            <a href='/#work' className="menu-item-link" onClick={() => {menuExit(navmenu)}}>work.</a>
          </div>
          <div className="menu-item">
            <a href='/#about' className="menu-item-link" onClick={() => {menuExit(navmenu)}}>about.</a>
          </div>
          <div className="menu-item">
            <a href='/#contact' className="menu-item-link" onClick={() => {menuExit(navmenu)}}>
             contact.
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Hamburger