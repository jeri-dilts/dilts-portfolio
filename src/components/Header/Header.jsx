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

  // listener placed on window for size change tracking
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
  },[])


  // hamburger menu or regular nav rendered per window dimensions
  function navType() {
    if (dimensions.width < 1224) {
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


// Reference
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
