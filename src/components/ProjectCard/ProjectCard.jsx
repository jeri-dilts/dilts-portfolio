import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { title, deploy_url, github_url, image_path } = props;
    return (
        <div className="projectCard">
            <Link className="card" to={deploy_url}>
                <img className="card-imgURL" src={image_path} alt="" />
            </Link>
            <div className="card-title">{title}</div>
        </div>
    );
}
