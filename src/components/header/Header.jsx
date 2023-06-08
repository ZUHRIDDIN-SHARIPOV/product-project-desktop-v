import modeImg from "../../assets/images/mode.svg";
import siteHeaderImg from "../../assets/images/product.svg";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__block">
            <div className="site-header__img">
              <img src={siteHeaderImg} alt="site-header__img!" />
            </div>
            <ul className="site-header__list">
              <li className="site-header__item">Product</li>
              <li className="site-header__item">Product</li>
              <li className="site-header__item">Customers</li>
              <li className="site-header__item">Customers</li>
              <li className="site-header__item">Pricing</li>
              <li className="site-header__item">Resources</li>
              <li className="site-header__item">
                <button>Sign In</button>
              </li>
              <li className="site-header__item">
                <button>Sign Up</button>
              </li>
              <li className="site-header__item">
                <img src={modeImg} alt="mode img!" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
