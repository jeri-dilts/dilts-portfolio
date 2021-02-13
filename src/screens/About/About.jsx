import "./About.css";
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa";
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
  DiNpm,
} from "react-icons/di";

export default function About() {
  return (
    <div className="page-container">
      <div className="about-container">
        <div className="about-paragraph">
          Hello! In my previous life I was a scientist, but now I'm a software
          engineer! Check out my GitHub as I build apps using ReactJS. In my
          previous career, I had a knack for finding creative solutions to
          difficult problems. I try to make my work fun and innovative as well
          as my approach to life. I thrive in challenging environments and am
          looking for a company just as ambitious as myself.
        </div>
        <div className="gh-li-icon-container">
          <IconContext.Provider value={{ className: "gh-li-icon" }}>
            <div className="icon">
              <a href="https://linkedin.com/in/jeri-dilts">
                <FaLinkedin />
              </a>
              <a href="https://github.com/jeri-dilts">
                <FaGithub />
              </a>
            </div>
          </IconContext.Provider>
        </div>
      </div>

      <div className="dev-icon-container">
        <IconContext.Provider value={{ className: "dev-icon" }}>
          <div className="icon, item-center"><DiReact /></div>
          <div className="text">React</div>
          <div className="icon, item-center"><DiHeroku /></div>
          <div className="text">Heroku</div>
          <DiJavascript1 />
          <div className="text">Javascript</div>
          <DiHtml5 />
          <div className="text">Html5</div>
          <DiNodejs />
          <div className="text">Nodejs</div>
          <DiMsqlServer />
          <div className="text">MySQL Server</div>
          <DiMongodb />
          <div className="text">MongoDB</div>
          <DiPostgresql />
          <div className="text">Postgresql</div>
          <DiLinux />
          <div className="text">Linux</div>
          <DiRuby />
          <div className="text">Ruby</div>
          <DiRor />
          <div className="text">Ruby on Rails</div>
          <DiVisualstudio />
          <div className="text">Visual Studio</div>
          <DiPerl />
          <div className="text">Perl</div>
          <DiNpm />
          <div className="text">NPM</div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
