import dayjs from "dayjs";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/MylesMureithi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/myles-mureithi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:you@example.com" aria-label="Email me">
          <FaRegEnvelope size={30} />
        </a>
      </div>
      <p>&copy; {dayjs().year()} Myles M. All rights reserved.</p>
    </footer>
  );
}

export default Footer;