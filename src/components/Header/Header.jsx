import "./Header.css";
import Hamburger from "../Hamburger/Hamburger";
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


  // hamburger menu or regular nav rendered per window dimensions
  function navType() {
    if (dimensions.width < 1000) {
      return <Hamburger />;
    }
    return <Nav />;
  }
  


  return (

    <div className="header-container">

      <div className="name-link">
        <Link to="/">Jeri Dilts</Link>
      </div>

      {navType()}
      
    </div>
  )
}



// Notes:

// Reference
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize





// hamburger menu toggle state
//  const [isOpen, setOpen] = useState(false);

// On click (toggle) hamburger menu gives nav options

      // {/* {dimensions.width < 416 && <Hamburger toggled={isOpen} toggle={setOpen} />} */}
      // {/* {dimensions.width > 415 && } */}

      // {/* <div className="hamburger-menu">
      //     <Hamburger toggled={isOpen} toggle={setOpen} />
      //   </div> */}
      {/* <div className="hamburger-icon">
        {dimensions.width < 1000 && <Hamburger />}
      </div>


      <div className="regular-nav">
        {dimensions.width > 1000 && <Nav />}
      </div> */}