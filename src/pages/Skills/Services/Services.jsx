import { FaExternalLinkAlt } from "react-icons/fa";
import { RiFiverrFill } from "react-icons/ri";
import "./Services.css";

const offerings = [
  "Business websites",
  "Portfolios",
  "Personal brands",
  "Landing pages",
  "Small web projects",
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <h2 className="services-title">Services</h2>
        <hr />
      </div>

      <p className="services-blurb">
        I build responsive websites with React, JavaScript, HTML, and CSS.
        Available for freelance projects alongside my studies.
      </p>

      <ul className="services-list">
        {offerings.map((item) => (
          <li key={item} className="services-tag">
            {item}
          </li>
        ))}
      </ul>

      <div className="services-featured">
        <h3>Featured project</h3>
        <p>
          <strong>Solex</strong>: A responsive landing page I designed,
          built, and deployed.
        </p>
        <a
          href="https://solex-eta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the site <FaExternalLinkAlt size={12} aria-hidden="true" />
        </a>
      </div>

      <a
        className="services-cta"
        href="https://tinyurl.com/2evhjb3v"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFiverrFill size={22} aria-hidden="true" />
        Hire me on Fiverr
      </a>
    </section>
  );
}

export default Services;