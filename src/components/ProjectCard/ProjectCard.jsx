import "./ProjectCard.css";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

export default function ProjectCard(props) {
    const { title, deploy_url, github_url, image_path,description} = props;

    return (
        <div className='overlay-zone'>
            <img className="gallery__img" src={image_path} />
            <div className="overlay">
                <div class="card-contents">
                    <div className="card-title">{title}</div>
                    <div className="card-description">{description}</div>
                    <div className="fa-gr-icon-container">
                        <IconContext.Provider value={{ className: "gh-icon" }}>
                            <a href={github_url}><FaGithub /></a>
                            <a href={deploy_url}><GrDeploy /></a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
        
    );
}