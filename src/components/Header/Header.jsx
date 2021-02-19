import "./Header.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_02172021.pdf"

export default function Header() {
  return (
    <div className="header-container">
        <div className="name-link"><Link to="/ThanksForViewing!">Jeri Dilts</Link></div>
        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            <a href={pdf} className="link" target="_blank">Resume</a>
            <Link to="contact" className="link">Contact</Link>
        </div>
    </div>
  );
}


{/* <a
href="https://drive.google.com/file/d/1PaMworqazqZXScpl3mw-xYM2phHTO6_M/view?usp=sharing"
target="_blank"
rel="noopener noreferrer"
>
Resume
</a> */}