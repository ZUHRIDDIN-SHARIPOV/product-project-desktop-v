import "./Price.scss";

const Price = () => {
  return (
    <>
      <section className="price">
        <div className="container">
          <div className="price__block">
            <h2 className="price__title">Price Table</h2>
            <p className="price__text">We offer competitive price</p>
            <ul className="price__list">
              <li className="price__item">
                <h2 className="price__item-title">Free</h2>
                <p className="price__item-text">Brief price description</p>
                <ul className="price__item-content">
                  <li className="price__item-content-item">0</li>
                  <li className="price__item-content-item">
                    <p className="price__item-content-item-title">$</p>
                    <p className="price__item-content-item-text">Per / month</p>
                  </li>
                </ul>
                <p className="price__item-text">Only 2 Operators</p>
                <p className="price__item-text">Notifications</p>
                <p className="price__item-text">Landing Pages</p>
                <button className="price__item-btn">Order Now</button>
              </li>
              <li className="price__item">
                <h2 className="price__item-title">Standard</h2>
                <p className="price__item-text">Brief price description</p>
                <ul className="price__item-content">
                  <li className="price__item-content-item">5</li>
                  <li className="price__item-content-item">
                    <p className="price__item-content-item-title">$</p>
                    <p className="price__item-content-item-text">Per / month</p>
                  </li>
                </ul>
                <p className="price__item-text">5+ Operators</p>
                <p className="price__item-text">Notifications</p>
                <p className="price__item-text">Landing Pages</p>
                <button className="price__item-btn">Order Now</button>
              </li>
              <li className="price__item">
                <h2 className="price__item-title">Premium</h2>
                <p className="price__item-text">Brief price description</p>
                <ul className="price__item-content">
                  <li className="price__item-content-item">10</li>
                  <li className="price__item-content-item">
                    <p className="price__item-content-item-title">$</p>
                    <p className="price__item-content-item-text">Per / month</p>
                  </li>
                </ul>
                <p className="price__item-text">10+ Operators</p>
                <p className="price__item-text">Notifications</p>
                <p className="price__item-text">Landing Pages</p>
                <button className="price__item-btn">Order Now</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;
