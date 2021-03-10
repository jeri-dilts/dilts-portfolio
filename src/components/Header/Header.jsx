import "./Header.css";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_03_10_2021.pdf";
import { useState, useEffect } from 'react';





export default function Header() {



  // hamburger menu toggle state
  const [isOpen, setOpen] = useState(false)

  // setting state - responsive window 
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });





  useEffect(() => {

    // trigger a re-render by changing the state
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    // detecting event by listening for a window resize
    window.addEventListener("resize", debouncedHandleResize);

    return _ => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  // const navigationRenderType(size){

  //   const isLoggedIn = props.isLoggedIn;
  //     if (isLoggedIn) {
  //       return <UserGreeting />;
  //     }
  //     return <GuestGreeting />;
  // }



  return (
    <div className="header-container">
        <div className="name-link"><Link to="/">Jeri Dilts</Link></div>
      
        <div className="hamburger-icon">
          {dimensions.width < 416 && <Hamburger />}
        </div>
        {/* {dimensions.width < 416 && <Hamburger toggled={isOpen} toggle={setOpen} />} */}
        {/* {dimensions.width > 415 && } */}
        


        {/* <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div> */}

        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            <a href={pdf} className="link" target="_blank">Resume</a>
            <Link to="contact" className="link">Contact</Link>
        </div>
    </div>
  );

  // return (
  //   <div>
  //     Rendered at {dimensions.width} x {dimensions.height}
  //   </div>
  // );
}





// less aggressive re-rendering (for performance reasons)
function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer);
    timer = setTimeout(_ => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<MyComponent />, rootElement);



// Reference:
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize



// When window size gets smaller, hamburger appears and nav disappears
// When window size get larger, hamburger menu disappears and nav appears
// Position hamburger menu in the right location
// On click (toggle) hamburger menu gives nav options
