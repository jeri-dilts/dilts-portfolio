import "./Sticky.css";
import { Link } from "react-router-dom";

export default function Sticky() {
  return (
    <div className='stick-container'>
        <Link to="github">
            <img src="https://i.imgur.com/CFVVVfP.png" alt="github-icon"/>
        </Link>
    </div>
  );
}