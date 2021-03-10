import "./Header.css";
import Hamburger from "hamburger-react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {

  // state created for auto re-render
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth
  })

  // listener placed on Header for window size
  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)

    // cleaning up event listener (avoid binding)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (

    <div className="header-container">


      <div className="name-link">
        <Link to="/">Jeri Dilts</Link>
      </div>


      <div className="hamburger-icon">
        {dimensions.width < 1000 && <Hamburger />}
      </div>


      <div className="regular-nav">
        {dimensions.width > 1000 && <Nav />}
      </div>


    </div>
  )
}



// Notes:

// Reference
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

// hamburger menu toggle state
//  const [isOpen, setOpen] = useState(false);

// When window size gets smaller, hamburger appears and nav disappears - needs use
// effect
// When window size get larger, hamburger menu disappears and nav appears
// Position hamburger menu in the right location
// On click (toggle) hamburger menu gives nav options

      // {/* {dimensions.width < 416 && <Hamburger toggled={isOpen} toggle={setOpen} />} */}
      // {/* {dimensions.width > 415 && } */}

      // {/* <div className="hamburger-menu">
      //     <Hamburger toggled={isOpen} toggle={setOpen} />
      //   </div> */}
