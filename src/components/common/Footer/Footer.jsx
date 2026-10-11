import dayjs from "dayjs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFiverrFill } from "react-icons/ri";
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
        <a href="https://tinyurl.com/2evhjb3v" target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
          <RiFiverrFill size={30} />
        </a>
      </div>
      <p>&copy; {dayjs().year()} Myles M. All rights reserved.</p>
    </footer>
  );
}

export default Footer;