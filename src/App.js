import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCard from "./componets/ProductCard";
import Products from "./page/Products";
import Navbar from "./componets/Navbar";
import Favorite from "./page/Favorite";
import Signup from "./page/auth/Signup";
import LatestProducts from "./componets/LatestProducts";
import Footer from "./componets/Footer";
import SearchResults from "./page/SearchResults";
import AddToCart from "./page/AddToCart";
import Login from "./page/auth/Login";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
        <Route path="/" element={<LatestProducts />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
