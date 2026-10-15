import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Message from "../../components/common/Message/Message";
import "./Projects.css";

const projects = [
  {
    title: "Solex",
    featured: true,
    status: "Live",
    type: "Solo",
    description:
      "Responsive landing page for Solex, an adaptive scheduling platform for students.",
    role: "Built and deployed the landing page, plus an admin dashboard that lets the team view website entries and waitlist sign-ups.",
    tags: ["React", "Responsive design", "Admin dashboard"],
    links: [
      { label: "Live site", href: "https://solex-eta.vercel.app/", Icon: FaExternalLinkAlt },
    ],
  },
  {
    title: "Anti-Burnout Student Scheduler",
    status: "Live",
    type: "Team of 3",
    description:
      "A student scheduling app focused on planning workloads without burning out.",
    role: "Defined the app's logic and functionality and contributed design decisions.",
    tags: ["React", "Vite", "Tailwind CSS"],
    links: [
      {
        label: "Live app",
        href: "https://solex-anti-burnout-scheduler.lovable.app/app",
        Icon: FaExternalLinkAlt,
      },
    ],
  },
  {
    title: "Portfolio (React)",
    status: "In progress",
    type: "Solo",
    description:
      "This site, rebuilt in React from my original HTML, CSS, and JavaScript version.",
    role: "Designed and built it: routing, a shared layout, and reusable components.",
    tags: ["React", "React Router", "Vite", "CSS"],
    links: [
      {
        label: "Code",
        href: "https://github.com/MylesMureithi/my_react_portfolio",
        Icon: FaGithub,
      },
      {
        label: "Original site",
        href: "https://mylesmureithi.github.io/my-portfolio/",
        Icon: FaExternalLinkAlt,
      },
    ],
  },
];

function Projects() {
  return (
    <>
      <section className="projects">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <hr />
        </div>

        <div className="projects-grid">
          {projects.map(
            ({ title, featured, status, type, description, role, tags, links, image }) => (
              <article
                key={title}
                className={`project-card${featured ? " project-card-featured" : ""}`}
              >
                {image && (
                  <img src={image} alt={`${title} screenshot`} className="project-image" />
                )}

                <div className="project-badges">
                  <span className="project-badge">{status}</span>
                  <span className="project-badge">{type}</span>
                </div>

                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <p className="project-role">{role}</p>

                <ul className="pill-list">
                  {tags.map((tag) => (
                    <li key={tag} className="pill">
                      {tag}
                    </li>
                  ))}
                </ul>

                {links.length > 0 && (
                  <div className="project-links">
                    {links.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <Icon size={14} aria-hidden="true" />
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            )
          )}
        </div>
      </section>

      <div className="split-container">
        <hr className="split" />
      </div>

      <Message />
    </>
  );
}

export default Projects;