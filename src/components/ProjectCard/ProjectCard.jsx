import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
    const { title, deploy_url, github_url, image_path,description} = props;

    return (
        <div className="card">
            <div class="overlay-zone">
                <a href={deploy_url}>
                    <img className="project_img overlay-zone" src={image_path} alt="" />
                </a>
                <div class="overlay">
                    <div className="card-title">{title}</div>
                </div>
            </div>
        </div>
    );
}

{/* <div className="card-title">{title}</div>
            <div className="card-description">{description}</div>
            <div className="card-githubURL">{github_url}</div> */}
