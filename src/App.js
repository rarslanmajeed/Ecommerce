import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import CardsDetails from "./pages/CardsDetails";
import Cards from "./pages/Cards";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import SizeChart from "./pages/SizeChart";
import Faq from "./pages/Faq";
import CartProducts from "./pages/CartProducts";
import Details from "./pages/Details";
import PaymentForm from "./components/PaymentForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/size" element={<SizeChart />} />
        <Route path="/products" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetails />} />
        <Route path="/cartProducts" element={<CartProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/details" element={<Details />} />
        <Route path="/payment" element={<PaymentForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
