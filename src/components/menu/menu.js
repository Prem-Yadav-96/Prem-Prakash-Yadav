import { useState } from 'react'
import '../../styles/menu.scss'
import Hamburger from './hamburger';


function Menu() {


  //state for menu button
  const [state, setState] = useState({
    initial:false,
    clicked: null,
    menuName: 'Menu'
  });

  //setting disabled on menu toggle
  const [disabled, setDisabled] = useState(false);

  //Determine if menu should be disabled

  const disableMenu = () =>{
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };


  //check for page change


   function handleMenu(){
     disableMenu();
    if(state.initial === false){
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close'
      });
    } else if (state.clicked === true){
      setState({
        clicked: !state.clicked,
        menuName: 'Menu'
      });

    } else if (state.clicked === false){
      setState({
        clicked: !state.clicked,
        menuName: 'Close'
      });
    }
  };


  


  return (
    <>
    <header className='nav-header' >
      <span className="name"> <a href="/#home">prem prakash yadav.</a></span>
      <span className="job"> front-end developer.</span>
      <span className="place"> from bangalore.</span>
      <div class="menu-open" >
      <button disabled={disabled} onClick={handleMenu}>menu.</button>
      </div>
      </header>
      <Hamburger state={state}/>
      </>
  )
}

export default Menu
