import "./Header.css";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_02172021.pdf";
import { useState } from 'react';

export default function Header() {

  const [isOpen, setOpen] = useState(false) // hamburger menu toggle state

  return (
    <div className="header-container">
        <div className="name-link"><Link to="/ThanksForViewing!">Jeri Dilts</Link></div>
      
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>

        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            <a href={pdf} className="link" target="_blank">Resume</a>
            <Link to="contact" className="link">Contact</Link>
        </div>
    </div>
  );
}



