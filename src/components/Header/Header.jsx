import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
        <div className="name-link"><Link to="/">JERI DILTS</Link></div>
        <div className="right-nav">
            <Link to="about" className="link">About</Link>
            <Link to="portfolio" className="link">Portfolio</Link>
            <Link to="contact" className="link">Resume</Link>
            <Link to="contact" className="link">Contact</Link>
        </div>
    </div>
  );
}
