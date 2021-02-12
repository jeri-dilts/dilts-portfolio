import "./Main.css";
import { Link } from "react-router-dom";
import pdf from "../../img/Jeri_Dilts_Full_Stack_Developer_01282020.pdf"

export default function Main() {
  return (
    <div className="main-container">
      <div className="name-title">Jeri Dilts</div>
      <div className="sub-title">Junior Full Stack Developer</div>
      <div className="nav">
        <Link to="about" className="link">About</Link>
        <Link to="portfolio" className="link">Portfolio</Link>
        <a href={pdf} className="link">Resume</a>
        <Link to="contact" className="link">Contact</Link>
      </div>
    </div>
  );
}











// ------------------------------------------------ parallax effect .... to do later
// import "../../styles/main.css";
// <div className="parallax-container">
//   <div class="wrapper">
//     <img class="background__image" src="https://i.imgur.com/tkAszSL.jpg" />
//     <img class="middle__image" src="https://i.imgur.com/CFVVVfP.png" />
//     <img class="foreground__image" src="https://i.imgur.com/xIMiiSJ.png" />
//   </div>
// </div>