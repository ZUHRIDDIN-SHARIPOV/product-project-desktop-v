import productItemImg1 from "../../assets/images/product__item-img-1.svg";
import productItemImg2 from "../../assets/images/product__item-img-2.svg";
import productItemImg3 from "../../assets/images/product__item-img-3.svg";
import productItemImg4 from "../../assets/images/product__item-img-4.svg";
import "./Product.scss";

const Product = () => {
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product__block">
            <h2 className="product__title">
              Product was Built Specifically for You
            </h2>
            <ul className="product__list">
              <li className="product__item">
                <div className="product__item-img">
                  <img src={productItemImg1} alt="product__item-img-1!" />
                </div>
                <h2 className="product__item-title">First click tests</h2>
                <p className="product__item-text">
                  While most people enjoy casino gambling,
                </p>
              </li>
              <li className="product__item">
                <div className="product__item-img">
                  <img src={productItemImg2} alt="product__item-img-2!" />
                </div>
                <h2 className="product__item-title">Design surveys</h2>
                <p className="product__item-text">
                  Sports betting, lottery and bingo playing for the fun
                </p>
              </li>
              <li className="product__item">
                <div className="product__item-img">
                  <img src={productItemImg3} alt="product__item-img-3!" />
                </div>
                <h2 className="product__item-title">Preference tests</h2>
                <p className="product__item-text">
                  The Myspace page defines the individual.
                </p>
              </li>
              <li className="product__item">
                <div className="product__item-img">
                  <img src={productItemImg4} alt="product__item-img-4" />
                </div>
                <h2 className="product__item-title">Five second tests</h2>
                <p className="product__item-text">
                  Personal choices and the overall personality of the person.
                </p>
              </li>
            </ul>
            <button className="product__btn">SIGN UP NOW</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
