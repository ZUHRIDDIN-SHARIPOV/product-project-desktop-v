import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Strategies from "./components/strategies/Strategies";
import Price from "./components/price/Price";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Product />
        <Strategies />
        <Price />
      </main>
    </div>
  );
}

export default App;
