import "./Main.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_01282020.pdf"

export default function Main(){
  return (
    <div className="main-container">
      <div className="name-title">Jeri Dilts</div>
      <div className="sub-title">Junior Full Stack Developer</div>
      <div className="nav">
        <Link to="ThanksForViewing/about" className="link">About</Link>
        <Link to="ThanksForViewing/portfolio" className="link">Portfolio</Link>
        <a href={pdf} className="link">Resume</a>
        <Link to="ThanksForViewing/contact" className="link">Contact</Link>
      </div>
    </div>
  );
}