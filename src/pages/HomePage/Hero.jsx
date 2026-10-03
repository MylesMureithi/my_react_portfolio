import GenIntro from "../../components/Hero/GenIntro";
import ProgIntro from "../../components/Hero/ProgIntro";
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

        <div className="hero-message">
          <h2>Leave a Message!</h2>
          <hr />
          <p>Please feel free to contact me for any more information below!</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Hero;
