import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function Portfolio() {

    // .... in next update - put all project info in JSON or Airtable
    let project_info = {
        "geosmin": {
            title:"Geosmin",
            deploy_url:"https://geosmin.netlify.app/",
            github_url:"https://github.com/jeri-dilts/geosmin",
            image_path:"../../img/",
            description:""
        },
        "tt_chat":{
            title:"TT Chat",
            deploy_url:"https://tt-chat-ticket-tracker.netlify.app/",
            github_url:"https://github.com/jeri-dilts/TT_Ticket_Tracker",
            image_path:"../../img/",
            description:""
        },
        "pizza":{
            title:"Pizza Pie!",
            deploy_url:"https://pizza-pie.netlify.app/",
            github_url:"https://github.com/jeri-dilts/pizza",
            image_path:"../../img/",
            description:""
        },
        "geosmin":{
            title:"Geosmin",
            deploy_url:"https://geosmin.netlify.app/",
            github_url:"https://github.com/jeri-dilts/geosmin",
            image_path:"../../img/",
            description:""
        }
    }

    // iterating over all projects and dropping characteristics in a card
    const PROJECTS = Object.keys(project_info).map((key, index) =>
        <ProjectCard
            title={project_info[key].title}
            deploy_url={project_info[key].deploy_url}
            github_url={project_info[key].github_url}
            image_path={project_info[key].image_path}
        />
    )

    return (
        <div className="portfolio-container">{PROJECTS}</div>
    );
}