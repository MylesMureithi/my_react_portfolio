import { FaRegEnvelope } from "react-icons/fa";
import "./Message.css";

function Message() {
  return (
    <div className="hero-message" id="message">
      <h2>Leave a Message!</h2>
      <hr />
      <p>Please feel free to contact me for any more information below!</p>
      <a href="mailto:mylesthestudent@gmail.com" aria-label="Email me" target="_blank">
        <FaRegEnvelope size={30} />
      </a>
    </div>
  );
}

export default Message;
