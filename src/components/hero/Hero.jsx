import heroContentImg from "../../assets/images/hero__content-img.svg";
import heroImg from "../../assets/images/heroImg.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__block">
            <div className="hero__block">
              <div className="hero__content-block">
                <h1 className="hero__content-title">
                  Work at the speed of thought
                </h1>
                <p className="hero__content-text">
                  Tools, tutorials, design and innovation experts, all in one
                  place! The most intuitive way to imagine your next user
                  experience.
                </p>
                <div className="hero__content-list">
                  <button className="hero__content-btn">Get started</button>
                  <div className="hero__content-img">
                    <img src={heroContentImg} alt="hero__content-img!" />
                  </div>
                </div>
              </div>
              <div className="hero__img">
                <img src={heroImg} alt="hero img!" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
