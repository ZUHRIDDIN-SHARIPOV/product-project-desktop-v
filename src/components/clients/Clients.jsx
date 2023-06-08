import contentImg1 from "../../assets/images/clients__content-img1.png";
import contentImg2 from "../../assets/images/clients__content-img2.png";
import contentImg3 from "../../assets/images/clients__content-img3.png";
import stars from "../../assets/images/stars.svg";
import "./Clients.scss";

const Clients = () => {
  return (
    <>
      <section className="clients">
        <div className="container">
          <div className="clients__block">
            <h2 className="clients__title">What Clients Say</h2>
            <p className="clients__text">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <ul className="clients__list">
              <li className="clients__item">
                <div className="clients__item-img">
                  <img src={stars} alt="stars!" />
                </div>
                <p className="clients__item-text">
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="clients__content-block">
                  <div className="clients__content">
                    <div className="clients__content-img">
                      <img src={contentImg1} alt="clients__content-img1!" />
                    </div>
                  </div>
                  <div className="clients__content">
                    <h2 className="clients__content-title">Wahid Ari</h2>
                    <p className="clients__content-text">Designer</p>
                  </div>
                </div>
              </li>
              <li className="clients__item">
                <div className="clients__item-img">
                  <img src={stars} alt="stars!" />
                </div>
                <p className="clients__item-text">
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="clients__content-block">
                  <div className="clients__content">
                    <div className="clients__content-img">
                      <img src={contentImg2} alt="clients__content-img2!" />
                    </div>
                  </div>
                  <div className="clients__content">
                    <h2 className="clients__content-title">Wahid Ari</h2>
                    <p className="clients__content-text">Designer</p>
                  </div>
                </div>
              </li>
              <li className="clients__item">
                <div className="clients__item-img">
                  <img src={stars} alt="stars!" />
                </div>
                <p className="clients__item-text">
                  Product helps you see how many more days you need to work to
                  reach your financial goal.
                </p>
                <div className="clients__content-block">
                  <div className="clients__content">
                    <div className="clients__content-img">
                      <img src={contentImg3} alt="clients__content-img3!" />
                    </div>
                  </div>
                  <div className="clients__content">
                    <h2 className="clients__content-title">Wahid Ari</h2>
                    <p className="clients__content-text">Designer</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
