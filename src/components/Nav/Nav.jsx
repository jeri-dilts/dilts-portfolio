import "./Nav.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_03_10_2021.pdf";

export default function Nav() {

    return (
        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            <a href={pdf} className="link" target="_blank">Resume</a>
            <Link to="contact" className="link">Contact</Link>
        </div>
    )
}