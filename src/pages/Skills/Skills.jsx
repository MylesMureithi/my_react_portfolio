import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaReact } from "react-icons/fa";
import Message from "../../components/common/Message/Message";
import "./Skills.css";

const skills = [
  { name: "HTML", Icon: FaHtml5 },
  { name: "CSS", Icon: FaCss3Alt },
  { name: "JavaScript", Icon: FaJs },
  { name: "Python", Icon: FaPython },
  { name: "React", Icon: FaReact },
];

function Skills() {
  return (
    <>
      <section className="skills">
        <div className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <hr />
        </div>

        <ul className="skills-grid">
          {skills.map(({ name, Icon }) => (
            <li key={name} className="skill-card">
              <Icon size={44} aria-hidden="true" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </section>
      <Message />
    </>
  );
}

export default Skills;
