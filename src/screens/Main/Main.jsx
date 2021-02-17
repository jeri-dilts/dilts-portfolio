import "./Main.css";
import { Link } from "react-router-dom";

export default function Main(){
  return (
    <div className="main-container">
      <div className="name-title">Jeri Dilts</div>
      <div className="sub-title">Junior Full Stack Developer</div>
      <div className="nav">
        <Link to="/portfolio" className="link">WELCOME!</Link>
      </div>
    </div>
  );
}