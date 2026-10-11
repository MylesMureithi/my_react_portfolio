import GenIntro from "../../components/Hero/GenIntro/GenIntro";
import ProgIntro from "../../components/Hero/ProgIntro/ProgIntro";
import Message from "../../components/common/Message/Message";
import pfp from "../../assets/pfp.png";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="hero-title">
        <h2 className="title">Personal Portfolio: A Sneak Peek</h2>
        <hr />
      </div>

      <img src={pfp} className="pfp" alt="Myles M." />

      <div className="hero-content">
        <GenIntro />
        <ProgIntro />
      </div>

      <div className="split-container">
        <hr className="split" />
      </div>

      <Message />
    </>
  );
}

export default Home;