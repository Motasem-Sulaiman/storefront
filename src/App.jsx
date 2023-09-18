import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Categories from "./Components/Categories/Categories";
import { connect } from "react-redux";
import { getRemoteData } from "./store/actions";
// import Products from "./Components/Products/Products";
import SimpleCart from "./Components/SimpleCart/SimpleCart";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
// import { ChakraProvider } from '@chakra-ui/react'
import "./App.scss";
import { useEffect } from "react";
function App(props) {
  useEffect(() => {
    props.getRemoteData();
  }, []);
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/details/:Id" element={<ProductDetails />} />
        <Route path="/" element={<Categories />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
  
      <SimpleCart />
      <Footer />
    </div>
  );
}
const mapDispatchToProps = { getRemoteData };

export default connect(null, mapDispatchToProps)(App);
