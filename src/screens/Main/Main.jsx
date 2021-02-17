import "./Main.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_01282020.pdf"

export default function Main(){
  return (
    <div className="main-container">
      <div className="name-title">Jeri Dilts</div>
      <div className="sub-title">Junior Full Stack Developer</div>
      <div className="nav">
        {/* <Link to="/about" className="link">About</Link> */}
        <Link to="/portfolio" className="link">WELCOME!</Link>
        {/* <a href={pdf} className="link">Resume</a>
        <Link to="/contact" className="link">Contact</Link> */}
      </div>
    </div>
  );
}