import "./Hamburger.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_03_10_2021.pdf";

export default function Hamburger() {

    return (
        <nav className="hamnav">
            <div className="hamburger-icon">
                <input type="checkbox" id="hamburger"/>
                <label htmlFor="hamburger">
                    <button>&#9776;</button>
                </label>  
            </div>
            <div className="menu-items">
                <Link to="about" className="link">About</Link>
                <Link to="portfolio" className="link">Portfolio</Link>
                <a href={pdf} className="link" target="_blank">Resume</a>
                <Link to="contact" className="link">Contact</Link>
            </div>
        </nav>
    )
}

