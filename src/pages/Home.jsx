import { useState } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const HomePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <NavBar onHandleClick={handleShow} />
      <Header />
      <ProductList products={productsArr} />
      <Footer />
      {show && <Cart show={show} onHandleClose={handleClose} />}
    </>
  );
};

export default HomePage;
