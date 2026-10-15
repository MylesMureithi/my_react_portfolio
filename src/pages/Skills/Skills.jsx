import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import Services from "./Services/Services";
import BeyondCode from "./BeyondCode/BeyondCode";
import Message from "../../components/common/Message/Message";
import "./Skills.css";

const skillGroups = [
  {
    category: "Languages",
    items: [
      { name: "HTML", Icon: FaHtml5, note: "Structure for my original portfolio" },
      { name: "CSS", Icon: FaCss3Alt, note: "Layouts, theming, and hover animations" },
      { name: "JavaScript", Icon: FaJs, note: "Interactivity and logic across my projects" },
      { name: "Python", Icon: FaPython, note: "Electricity grid analyses and management" },
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      { name: "React", Icon: FaReact, note: "This portfolio and the Solex landing page" },
      { name: "Vite", Icon: SiVite, note: "Dev server and build tooling" },
    ],
  },
  {
    category: "Workflow",
    items: [
      { name: "Git", Icon: FaGitAlt, note: "Version control for my projects" },
      { name: "GitHub", Icon: FaGithub, note: "Hosting and sharing my code" },
      { name: "Vercel", Icon: SiVercel, note: "Main hosting platform for projects" },
    ],
  },
];

function Skills() {
  return (
    <>
      <section className="skills">
        <div className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <hr />
        </div>

        {skillGroups.map(({ category, items }) => (
          <div key={category} className="skill-group">
            <h3 className="skill-group-title">{category}</h3>
            <ul className="skills-grid">
              {items.map(({ name, Icon, note }) => (
                <li key={name} className="skill-card">
                  <Icon size={44} aria-hidden="true" />
                  <span className="skill-name">{name}</span>
                  <small className="skill-note">{note}</small>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="split-container">
        <hr className="split" />
      </div>

      <Services />

      <div className="split-container">
        <hr className="split" />
      </div>

      <BeyondCode />

      <div className="split-container">
        <hr className="split" />
      </div>
      
      <Message />
    </>
  );
}

export default Skills;