import "./assets/fonts/fonts.scss";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Strategies from "./components/strategies/Strategies";
import Price from "./components/price/Price";
import Clients from "./components/clients/Clients";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Product />
        <Strategies />
        <Price />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
