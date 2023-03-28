import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ProductProvider } from "./context/ProductContext";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Cards/>
          <Footer />
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
