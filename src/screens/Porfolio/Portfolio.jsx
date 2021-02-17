import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function Portfolio() {

    // .... in next update - put all project info in JSON or Airtable
    let project_info = {
        "geosmin": {
            title:"Geosmin",
            deploy_url:"https://geosmin.netlify.app/",
            github_url:"https://github.com/jeri-dilts/geosmin",
            image_path:"https://i.imgur.com/DA7LINR.jpg",
            description:"Geosmin is a gourmet mushroom and microgreen urban farm store. This vending React App, collectively built by three team members, exhibits authentication and full CRUD using the MERN stack."
        },
        "tt_chat":{
            title:"TT Chat",
            deploy_url:"https://tt-chat-ticket-tracker.netlify.app/",
            github_url:"https://github.com/jeri-dilts/TT_Ticket_Tracker",
            image_path:"https://i.imgur.com/Y7xhZib.jpg",
            description:"TT Ticket Tracker is a full-stack application built with ReactJS and a Ruby on Rails server. It serves as a dual chat / ticket management system."
        },
        "pizza":{
            title:"Pizza Pie!",
            deploy_url:"https://pizza-pie.netlify.app/",
            github_url:"https://github.com/jeri-dilts/pizza",
            image_path:"https://i.imgur.com/eKx9zBw.jpg",
            description:"Pizza Pie! is a merchant social-esque React App, Airtable build where the user can interactively build their own pizza, name it, and place it for order."
        },
        "guapo":{
            title:"Guapo",
            deploy_url:"#",
            github_url:"#",
            image_path:"https://i.imgur.com/i09nsAv.png",
            description:"The coolest dog around."
        },
        "guapo1":{
            title:"Guapo",
            deploy_url:"#",
            github_url:"#",
            image_path:"https://i.imgur.com/KO8oKan.png",
            description:"The handsomest dog around."
        },
        "guapo2":{
            title:"Guapo",
            deploy_url:"#",
            github_url:"#",
            image_path:"https://i.imgur.com/QPRTyF9.png",
            description:"The most chill dog around."
        }
    }

    // iterating over all projects and dropping characteristics in a card
    const PROJECTS = Object.keys(project_info).map((key, index) =>
        <ProjectCard
            title={project_info[key].title}
            deploy_url={project_info[key].deploy_url}
            github_url={project_info[key].github_url}
            image_path={project_info[key].image_path}
            description={project_info[key].description}
        />
    )

    return (
        <div className="project-container">{PROJECTS}</div>
    );
}