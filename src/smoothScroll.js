import  { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'



export default function SmoothScroll() {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const fixedElem = document.querySelector('.nav-header');
        const fixedMenu = document.querySelector('.nav-container')

        const scroller = document.querySelector("#smoothScroll");
        const bodyScrollBar = Scrollbar.init(scroller, {
          damping:0.08
        });
    
        ScrollTrigger.scrollerProxy(scroller, {
          scrollTop(value) {
            if (arguments.length) {
              bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
          }
        });
    
        bodyScrollBar.addListener(function(status) {
          let offset = status.offset;
         
         fixedElem.style.top = offset.y + 'px';
         fixedElem.style.left = offset.x + 'px';

         fixedMenu.style.top = offset.y + 'px';
         fixedMenu.style.left = offset.x + 'px';


       });

        bodyScrollBar.addListener(ScrollTrigger.update);

       
    })
  return null;
}
