import "./About.css";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa"
import {
  DiHeroku,
  DiJavascript1,
  DiHtml5,
  DiNodejs,
  DiMsqlServer,
  DiMongodb,
  DiPostgresql,
  DiReact,
  DiLinux,
  DiRuby,
  DiRor,
  DiVisualstudio,
  DiPerl,
  DiNpm
} from "react-icons/di";

export default function About() {
  return (
    <div>

      <div className="about-container">
        <div className="about-paragraph">
          Hello! In my previous life I was a scientist, but now I'm a software
          engineer! Check out my GitHub as I build apps using ReactJS. In my
          previous career, I had a knack for finding creative solutions to
          difficult problems. I try to make my work fun and innovative as well
          as my approach to life. I thrive in challenging environments and am
          looking for a company just as ambitious as myself.
        </div>
        <div>
        <IconContext.Provider value={{ className: "icon-container" }}>
          <div className="icon">
            <a href="https://linkedin.com/in/jeri-dilts"><FaLinkedin /></a>
            <a href="https://github.com/jeri-dilts"><FaGithub /></a>
          </div>
        </IconContext.Provider>
        </div>
      </div>

      <IconContext.Provider value={{ className: "dev-icon-container" }}>
        <div className="icon">
          <DiReact />
        </div>
        <div className="text">React</div>
        <div className="icon">
          <DiHeroku />
        </div>
        <div className="text">Heroku</div>
        <div className="icon">
          <DiJavascript1 />
        </div>
        <div className="text">Javascript</div>
        <div className="icon">
          <DiHtml5 />
        </div>
        <div className="text">Html5</div>
        <div className="icon">
          <DiNodejs />
        </div>
        <div className="text">Nodejs</div>
        <div className="icon">
          <DiMsqlServer />
        </div>
        <div className="text">MySQL Server</div>
        <div className="icon">
          <DiMongodb />
        </div>
        <div className="text">MongoDB</div>
        <div className="icon">
          <DiPostgresql />
        </div>
        <div className="text">Postgresql</div>
        <div className="icon">
          <DiLinux />
        </div>
        <div className="text">Linux</div>
        <div className="icon">
          <DiRuby />
        </div>
        <div className="text">Ruby</div>
        <div className="icon">
          <DiRor />
        </div>
        <div className="text">Ruby on Rails</div>
        <div className="icon">
          <DiVisualstudio />
        </div>
        <div className="text">Visual Studio</div>
        <div className="icon">
          <DiPerl />
        </div>
        <div className="text">Perl</div>
        <div className="icon">
          <DiNpm />
        </div>
      </IconContext.Provider>
    </div>
  );
}
