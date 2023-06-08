import strategiesItemImg1 from "../../assets/images/strategies__item-img1.png";
import strategiesItemImg2 from "../../assets/images/strategies__item-img2.png";
import strategiesItemImg3 from "../../assets/images/strategies__item-img3.png";
import "./Strategies.scss";

const Strategies = () => {
  return (
    <>
      <section className="strategies">
        <div className="container">
          <div className="strategies__block">
            <h2 className="strategies__title">Contents Strategies</h2>
            <p className="strategies__text">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <ul className="strategies__list">
              <li className="strategies__item">
                <div className="strategies__item-img">
                  <img src={strategiesItemImg1} alt="strategies__item-img-1!" />
                </div>
                <p className="strategies__item-date">
                  By <b>Wahid Ari</b> | 03 March 2019
                </p>
                <h2 className="strategies__item-title">
                  Increasing Prosperity With Positive Thinking
                </h2>
              </li>
              <li className="strategies__item">
                <div className="strategies__item-img">
                  <img src={strategiesItemImg2} alt="strategies__item-img-2!" />
                </div>
                <p className="strategies__item-date">
                  By <strong>Wahid Ari</strong> | 03 March 2019
                </p>
                <h2 className="strategies__item-title">
                  Motivation Is The First Step To Success
                </h2>
              </li>
              <li className="strategies__item">
                <div className="strategies__item-img">
                  <img src={strategiesItemImg3} alt="strategies__item-img-3!" />
                </div>
                <p className="strategies__item-date">
                  By <strong>Wahid Ari</strong> | 03 March 2019
                </p>
                <h2 className="strategies__item-title">
                  Success Steps For Your Personal Or Business
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategies;
