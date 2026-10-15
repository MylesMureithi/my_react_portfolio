import { FaLanguage, FaMusic, FaSoundcloud } from "react-icons/fa";
import "./BeyondCode.css";

const languageTiers = [
  {
    level: "Native",
    items: [{ name: "English" }, { name: "Swahili" }],
  },
  {
    level: "Conversational",
    items: [
      { name: "Japanese", note: "working toward JLPT N4" },
      { name: "Spanish", note: "a bit rusty" },
    ],
  },
  {
    level: "Basics",
    items: [{ name: "French" }],
  },
];

const soundcloudLinks = [
  { label: "Main", href: "https://soundcloud.com/dampercat" },
  { label: "Orchestral, classical & ambient", href: "https://soundcloud.com/mossy-meadows" },
];

function BeyondCode() {
  return (
    <section className="beyond" id="beyond">
      <div className="beyond-header">
        <h2 className="beyond-title">Beyond Code</h2>
        <hr />
      </div>

      <div className="beyond-grid">
        <article className="beyond-card">
          <div className="beyond-card-head">
            <FaLanguage size={32} aria-hidden="true" />
            <h3>Languages</h3>
          </div>

          {languageTiers.map(({ level, items }) => (
            <div key={level} className="lang-tier">
              <h4 className="lang-level">{level}</h4>
              <ul className="pill-list">
                {items.map(({ name, note }) => (
                  <li key={name} className="pill">
                    {name}
                    {note && <small className="pill-note">{note}</small>}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="beyond-footnote">Also dabbled in Korean and Greek.</p>
        </article>

        <article className="beyond-card">
          <div className="beyond-card-head">
            <FaMusic size={28} aria-hidden="true" />
            <h3>Music Production</h3>
          </div>

          <p className="beyond-text">
            I produce music in Ableton Live and have been at it for 2 to 3 years.
          </p>
          <p className="beyond-text">
            Producing taught me to iterate on a project until it's finished.
          </p>

          <div className="beyond-links">
            {soundcloudLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="beyond-link"
              >
                <FaSoundcloud size={20} aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default BeyondCode;