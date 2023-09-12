import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import SimpleCart from "./Components/SimpleCart/SimpleCart";
// import { ChakraProvider } from '@chakra-ui/react'
import "./App.css";
export default (props) => {
  return (
    <>
     {/* <ChakraProvider> */}
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
      <Footer />
      {/* </ChakraProvider> */}
    </>
  );
};
