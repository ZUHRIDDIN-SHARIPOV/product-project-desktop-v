import footerImg from "../../assets/images/footer-img.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__block">
            <ul className="site-footer__list">
              <li className="site-footer__item">
                <h2 className="site-footer__item-title">
                  Join 100 Compannies who boost their business with Product
                </h2>
                <button className="site-footer__item-btn">Get This</button>
              </li>
              <li className="site-footer__item">
                <div className="site-footer__item-img">
                  <img src={footerImg} alt="site-footer__item-img!" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
