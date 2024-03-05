import { useContext, useState } from "react";
import { Nav, Container, Button } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { userAuthContext } from "../context/userAuthContext";

const NavBar = () => {
  const cartCtx = useContext(CartContext);
  const userAuthCtx = useContext(userAuthContext);
  const [show, setShow] = useState(false);

  const onLogout = () => {
    userAuthCtx.logout();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const numberOfItems = cartCtx.cartItem.length;

  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-black">
        <Container className="d-flex flex-row justify-content-between ">
          <Nav className="fs-3">
            <NavLink to="/" className="text-white px-3">
              Home
            </NavLink>
            <NavLink to="/store" className="text-white px-3">
              Store
            </NavLink>
            <NavLink to="/about" className="text-white px-3">
              About
            </NavLink>
            <NavLink to="/login" className="text-white px-3">
              Login
            </NavLink>
            <NavLink to="/contact" className="text-white px-3">
              Contact Us
            </NavLink>
          </Nav>
          {userAuthCtx.authToken && userAuthCtx.email && (
            <Button variant="danger" onClick={onLogout}>
              <h4 className="pt-1 pe-2">Logout</h4>{" "}
            </Button>
          )}
          <Button
            className="d-flex flex-row "
            variant="light"
            onClick={handleShow}
          >
            <h4 className="pt-1 pe-2">Cart</h4>{" "}
            <span className="p-1 px-2 mt-1 text-white bg-dark rounded ">
              {numberOfItems}
            </span>
          </Button>
        </Container>
      </Navbar>
      {show && <Cart show={show} onHandleClose={handleClose} />}
    </>
  );
};

export default NavBar;
