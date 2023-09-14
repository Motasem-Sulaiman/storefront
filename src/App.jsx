import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import { connect } from "react-redux";
import { getRemoteData } from "./store/actions";
import Products from "./Components/Products/Products";
import SimpleCart from "./Components/SimpleCart/SimpleCart";
// import { ChakraProvider } from '@chakra-ui/react'
import "./App.scss";
import { useEffect } from "react";
function App(props) {
  useEffect(() => {
    props.getRemoteData();
  }, []);
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
}
const mapDispatchToProps = { getRemoteData };


export default connect(null,mapDispatchToProps)(App);
