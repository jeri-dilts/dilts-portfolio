import "./Sticky.css";
import { Link } from "react-router-dom";

export default function Sticky() {
  return (
    <div className='sticky-container'>
        <Link to="github">
            <img src="https://i.imgur.com/CFVVVfP.png" alt="github-icon"/>
        </Link>
    </div>
  );
}