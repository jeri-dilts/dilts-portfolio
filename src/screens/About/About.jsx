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
      
      <div className="photo-and-links-container">
        <img src="https://i.imgur.com/9qfVW9x.png" alt="professional-photo" className="professional-image"/>
        <div className="gh-li-icon-container">
          <IconContext.Provider value={{ className: "gh-li-icon" }}>
            <a href="https://linkedin.com/in/jeri-dilts"><FaLinkedin /></a>
            <a href="https://github.com/jeri-dilts"><FaGithub /></a>
          </IconContext.Provider>
        </div>
      </div>

      <div className="about-paragraph">
        In my previous life I was a scientist, but now I'm a software engineer!
        Check out my GitHub as I build apps using ReactJS. In my previous
        career, I had a knack for finding creative solutions to difficult
        problems. I try to make my work fun and innovative as well as my
        approach to life. I thrive in challenging environments and am looking
        for a company just as ambitious as myself.
      </div>

      {/* implement javascript here.... there is too much repeating... use map */}
      <div className="dev-icon-container">
        <IconContext.Provider value={{ className: "dev-icon" }}>
          <div className="icon item-center">
            <DiReact />
          </div>
          <div className="text">React</div>
          <div className="icon item-center">
            <DiHeroku />
          </div>
          <div className="text">Heroku</div>
          <div className="icon item-center">
            <DiJavascript1 />
          </div>
          <div className="text">Javascript</div>
          <div className="icon item-center">
            <DiHtml5 />
          </div>
          <div className="text">Html5</div>
          <div className="icon item-center">
            <DiNodejs />
          </div>
          <div className="text">Nodejs</div>
          <div className="icon item-center">
            <DiMsqlServer />
          </div>
          <div className="text">MySQL Server</div>
          <div className="icon item-center">
            <DiMongodb />
          </div>
          <div className="text">MongoDB</div>
          <div className="icon item-center">
            <DiPostgresql />
          </div>
          <div className="text">Postgresql</div>
          <div className="icon item-center">
            <DiLinux />
          </div>
          <div className="text">Linux</div>
          <div className="icon item-center">
            <DiRuby />
          </div>
          <div className="text">Ruby</div>
          <div className="icon item-center">
            <DiRor />
          </div>
          <div className="text">Ruby on Rails</div>
          <div className="icon item-center">
            <DiVisualstudio />
          </div>
          <div className="text">Visual Studio</div>
          <div className="icon item-center">
            <DiPerl />
          </div>
          <div className="text">Perl</div>
          <div className="icon item-center">
            <DiNpm />
          </div>
          <div className="text">NPM</div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
