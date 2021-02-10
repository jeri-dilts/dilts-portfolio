import "./Header.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_01282020.pdf"

export default function Header() {
  return (
    <div className="header-container">
        <div className="name-link"><Link to="/">JERI DILTS</Link></div>
        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            {/* <Link to="resume" className="link">Resume</Link> */}
            <a href={pdf} className="link">Resume</a>
            <Link to="contact" className="link">Contact</Link>
        </div>
    </div>
  );
}

