import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
        <div className="name-link"><Link to="/">JERI DILTS</Link></div>
        <div className="right-nav">
            <div className="header-links"><Link to="about">About</Link></div>
            <div className="header-links"><Link to="portfolio">Portfolio</Link></div>
            <div className="header-links"><Link to="contact">Contact</Link></div>
        </div>
    </div>
  );
}
