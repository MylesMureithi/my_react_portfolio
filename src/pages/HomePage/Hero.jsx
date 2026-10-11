import GenIntro from "../../components/Hero/GenIntro";
import ProgIntro from "../../components/Hero/ProgIntro";
import Message from "../../components/common/Message";
import Footer from "../../components/common/Footer";
import "./Hero.css";

function Hero() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="hero-title">
          <h2 className="title">Personal Portfolio: A Sneak Peek</h2>
          <hr />
        </div>

        <div className="hero-content">
          <GenIntro />
          <ProgIntro />
        </div>

        <div className="split-container">
          <hr className="split" />
        </div>

        <Message />
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
