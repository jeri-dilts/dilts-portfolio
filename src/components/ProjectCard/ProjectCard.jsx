import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { title, deploy_url, github_url, image_path,description} = props;

    return (
        <div className="project-container">
            <a className="card" href={deploy_url}>
                <img className="card-imgURL" src={image_path} alt="" />
            </a>
            <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
            <div className="card-githubURL">{github_url}</div>
        </div>
    );
}
