import "./Hamburger.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_03_10_2021.pdf";

export default function Hamburger() {

    // onclick reset toggle
    function toggle(){
        document.getElementById("hamburger").checked = false;
    }

    return (
        <div className="hamnav">
            <input type="checkbox" id="hamburger"/>
            <label htmlFor="hamburger">&#9776;</label>  
            <div className="menu-items">
                <nav>
                    <ul>
                        <li><Link to="about" className="link" onClick={toggle}>About</Link></li>
                        <li><Link to="portfolio" className="link" onClick={toggle}>Portfolio</Link></li>
                        <li><a href={pdf} className="link" target="_blank" onClick={toggle}>Resume</a></li>
                        <li><Link to="contact" className="link" onClick={toggle}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}