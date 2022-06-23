
import { useEffect } from 'react';
import gsap from 'gsap'
import './App.scss';
//importing pages
import Home from './components/pages/home';



function App() {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //Prevents flashing
    gsap.to("body",{ visibility: 'visible', duration:0 })


  }, []);

  return (
    <>
      <Home/>
    </>
  );
}

export default App;
