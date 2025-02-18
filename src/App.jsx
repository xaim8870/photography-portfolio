import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ChakraProvider } from '@chakra-ui/react';
import Home from "./pages/Home";
import About from "./pages/About";
import SelectedWorks from "./pages/SelectedWorks";
import FineArtPrints from "./pages/FineArtPrints";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Catalog from "./components/ui/catalog";
import Cart from "./pages/Cart";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <ChakraProvider>
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/selected-works" element={<SelectedWorks />} />
        <Route path="/fine-art-prints" element={<FineArtPrints />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </CartProvider>
    </ChakraProvider>
  );
}

export default App;